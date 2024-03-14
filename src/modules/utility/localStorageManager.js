/**
 * Saves data to local storage.
 *
 * @param {string} key - The key to store the data under.
 * @param {any} data - The data to be saved.
 * @returns {Promise<void>} A promise that resolves when the data is successfully saved, or rejects with an error.
 */
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

/**
 * Retrieves data from local storage.
 *
 * @param {string} key - The key to retrieve the data from.
 * @returns {any} The retrieved data, or null if the data is not found or an error occurs.
 */
export function getDataFromLocalStorage(key) {
    try {
        const serializedData = localStorage.getItem(key);
        const result = JSON.parse(serializedData);
        return result;
    } catch (error) {
        console.error('Error retrieving data from local storage: ', error);
        return null;
    }
}

/**
 * Removes data from local storage.
 *
 * @param {string} key - The key of the data to be removed.
 * @returns {boolean} True if the data is successfully removed, false otherwise.
 */
export function removeDataFromStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing data from local storage: ', error);
        return false;
    }
}

/**
 * Removes a todo item from the existing data in local storage.
 *
 * @param {Array} existingData - The existing data in local storage.
 * @param {string} todoIDToRemove - The ID of the todo item to remove.
 * @returns {Array} The updated existing data with the specified todo item removed.
 */
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

/**
 * Edits a todo item in the existing data in local storage.
 *
 * @param {string} key - The key of the data in local storage.
 * @param {string} todoId - The ID of the todo item to edit.
 * @param {object} newData - The new data to update the todo item with.
 * @returns {Promise<boolean>} A promise that resolves to true if the data is successfully edited, or false otherwise.
 */
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

        // Save the updated data to local storage
        await saveDataToLocalStorage(key, existingData);
        return true;
    } catch (error) {
        console.error('Error editing data in local storage: ', error);
        return false;
    }
}
