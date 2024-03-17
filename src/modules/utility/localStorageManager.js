import { Project } from '../entities/project';

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
        let existingData = getDataFromLocalStorage(key);
        if (!existingData) {
            console.error(
                'Cannot edit data: No existing data found in local storage.'
            );
            return false;
        }

        // Find the project and todo index
        let projectIndex = -1;
        let todoIndex = -1;
        for (let i = 0; i < existingData.length; i++) {
            todoIndex = existingData[i].todos.findIndex(
                (todo) => todo.id === todoId
            );
            if (todoIndex !== -1) {
                projectIndex = i;
                break;
            }
        }

        if (projectIndex === -1 || todoIndex === -1) {
            throw new Error(
                'Todo with specified id not found in existing data.'
            );
        }

        // Check if the project name has been changed
        if (newData.project !== existingData[projectIndex].name) {
            // Call the updateTodoProject method
            existingData = updateTodoProject(
                existingData,
                projectIndex,
                todoIndex,
                newData.project
            );
        } else {
            // Update the todo item with the provided newData
            existingData[projectIndex].todos[todoIndex] = {
                ...existingData[projectIndex].todos[todoIndex],
                ...newData,
            };
        }

        // Save the updated data to local storage
        await saveDataToLocalStorage(key, existingData);
        return true;
    } catch (error) {
        console.error('Error editing data in local storage: ', error);
        return false;
    }
}

/**
 * Update the project name in the existing data retrieved from local storage and manages todo item relocation.
 * If a project with the new project name does not exist, a new project is created.
 * If the todo with the specified ID is not found in the existing data, no changes are made.
 *
 * @param {Array} existingData - The existing data retrieved from local storage.
 * @param {number} projectIndex - The index of the project containing the todo item to be updated.
 * @param {number} todoIndex - The index of the todo item within the project to be updated.
 * @param {number} newProjectName - The new project name.
 * @returns {Array} The updated existing data with the project and todo item modifications.
 */
function updateTodoProject(
    existingData,
    projectIndex,
    todoIndex,
    newProjectName
) {
    // Update the project name in the todo item
    existingData[projectIndex].todos[todoIndex].project = newProjectName;

    // Check if a project already exists with the new project name
    const newProjectIndex = existingData.findIndex(
        (project) => project.name === newProjectName
    );

    if (newProjectIndex === -1) {
        // Create a new project with the new project name
        const newProjectId = Date.now();
        const newProject = new Project(newProjectId, newProjectName);
        newProject.todos.push(existingData[projectIndex].todos[todoIndex]);
        existingData.push(newProject);
    } else {
        // Add the todo item to the existing project with the new project name
        existingData[newProjectIndex].todos.push(
            existingData[projectIndex].todos[todoIndex]
        );
    }

    // Remove the todo item from the original project
    existingData[projectIndex].todos.splice(todoIndex, 1);

    return existingData;
}
