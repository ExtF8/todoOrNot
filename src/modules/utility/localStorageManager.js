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
        console.log(existingData);
        console.error('Existing data is not in the expected format.');
        return existingData;
    }

    for (const project of existingData) {
        if (!project.todos || !Array.isArray(project.todos)) {
            console.log('projects: ', existingData);
            console.error(
                'Project todos are not in the expected format.'
            );
            continue; // Skip to the next project
        }

        // Remove todo with the specified ID from the project's todos array
        project.todos = project.todos.filter(
            (todo) => todo.id !== todoIDToRemove
        );
    }

    return existingData;
};

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

        // Merge existing data with new data
        const updateData = { ...existingData, ...newData };

        // Save updated data back to local storage
        return saveDataToLocalStorage(key, updateData);
    } catch (error) {
        console.error('Error editing data in local storage: ', error);
        return false;
    }
}
