import { clearPage } from '../utility/elementRender.js';

import { renderContainer } from '../utility/todoRenderer.js';

import { ProjectManager } from '../entities/project.js';

import {
    getDataFromLocalStorage,
    saveDataToLocalStorage,
} from '../utility/localStorageManager.js';
import { sampleData } from '../pageData/sampleData.js';

// Instantiate ProjectManager for managing projects
// Manages projects and their associated todos
const projectManager = new ProjectManager();
const PROJECTS_STORAGE_KEY = 'projects';

/**
 * Loads and displays the home page content.
 *
 * @param {HTMLElement} content - The parent element where the home page will be rendered.
 */
export default function homePageLoader(content) {
    document.addEventListener('DOMContentLoaded', async function () {
        clearPage(content);
        let existingData;

        try {
            // Try to retrieve existing data from local storage
            existingData = getDataFromLocalStorage(PROJECTS_STORAGE_KEY);
            // Check if existingData is null or undefined
            if (!existingData) {
                // If no existingData exists in local storage, save sample data
                saveDataToLocalStorage(
                    PROJECTS_STORAGE_KEY,
                    sampleData.projects
                );
            }
        } catch (error) {
            handleStorageError(error);
            // Save sample data to local storage as as fallback
            saveDataToLocalStorage(PROJECTS_STORAGE_KEY, sampleData.projects);
        }

        const section = document.querySelector('#content');
        const todoContainer = renderContainer(existingData);
        section.appendChild(todoContainer);
    });
}

export { projectManager };
