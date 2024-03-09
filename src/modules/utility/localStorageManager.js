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

// Function to edit data in local storage
export function editDataInLocalStorage(key, newData) {
    try {
        // Get existing data from local storage
        const existingData = getDataFromLocalStorage(key);

        if (existingData === null) {
            console.error(
                'Cannot edit data: No existing data found in local storage.'
            );
            return false;
        }
        if (Array.isArray(newData)) {
            // Merge arrays if newData is an array
            const updateData = [...existingData, ...newData];
            return saveDataToLocalStorage(key, updateData);
        } else if (typeof newData === 'object') {
            // Merge objects if newData is an object
            const updateData = { ...existingData, ...newData };
            return saveDataToLocalStorage(key, updateData);
        } else {
            console.error('Invalid data type. Expected an array or an object.');
            return;
        }
    } catch (error) {
        console.error('Error editing data in local storage: ', error);
        return false;
    }
}
