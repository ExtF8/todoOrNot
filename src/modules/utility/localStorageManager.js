// Function to save data to local storage
export function saveDataToLocalStorage(key, data) {
    return new Promise((resolve, reject) => {
        try {
            const serializedData = JSON.stringify(data);
            localStorage.setItem(key, serializedData);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

// Function to retrieve data from local storage
export function getDataFromLocalStorage(key) {
    try {
        const serializedData = localStorage.getItem(key);
        // if (serializedData === null) {
        //     return null;
        // }
        const result = JSON.parse(serializedData);
        return result;
    } catch (error) {
        console.error('Error retrieving data from local storage: ', error);
        return null;
    }
}

// Function to remove data from local storage
export function removeDataFromStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing data from local storage: ', error);
        return false;
    }
}

export function removeTodoFromLocalStorage(existingData, todoIDToRemove) {
    // Check if existingData is null or undefined
    if (!existingData || !Array.isArray(existingData)) {
        console.error('Existing data is not in the expected format.');
        return existingData;
    }

    for (const project of existingData) {
        if (!project.todos || !Array.isArray(project.todos)) {
            console.error('Project todos are not in the expected format.');
            continue; // Skip to the next project
        }

        // Remove todo with the specified ID from the project's todos array
        project.todos = project.todos.filter(
            (todo) => todo.id !== todoIDToRemove
        );
    }

    return existingData;
}

export async function editDataInLocalStorage(key, todoId, newData) {
    try {
        const existingData = getDataFromLocalStorage(key);
        if (!existingData) {
            console.error('Cannot edit data: No existing data found in local storage.');
            return false;
        }

        // Find the project containing the todo item with the matching id
        const projectIndex = existingData.findIndex(project => project.todos.some(todo => todo.id === todoId));
        if (projectIndex === -1) {
            console.error('Todo with specified id not found in existing data.');
            return false;
        }

        // Find the index of the todo item within the project
        const todoIndex = existingData[projectIndex].todos.findIndex(todo => todo.id === todoId);
        if (todoIndex === -1) {
            console.error('Todo with specified id not found in existing data.');
            return false;
        }

        // Update the todo item with the provided newData
        existingData[projectIndex].todos[todoIndex] = { ...existingData[projectIndex].todos[todoIndex], ...newData };

        console.log('projectIndex: ', projectIndex)
        console.log('todoIndex: ', todoIndex)
        // Save the updated data to local storage
        await saveDataToLocalStorage(key, existingData);
        return true;
    } catch (error) {
        console.error('Error editing data in local storage: ', error);
        return false;
    }
}

