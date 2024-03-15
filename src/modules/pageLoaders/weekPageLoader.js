import {
    getDataFromLocalStorage,
    saveDataToLocalStorage,
} from '../utility/localStorageManager.js';
import { sampleData } from '../pageData/sampleData.js';
import {
    handleStorageError,
    renderContainer,
} from '../utility/todoRenderer.js';
import { clearPage } from '../utility/elementRender.js';
import { TodoManager } from '../entities/todoItems.js';

const PROJECTS_STORAGE_KEY = 'projects';

/**
 * Loads and displays the week page content.
 *
 * @param {HTMLElement} content - The parent element where the week page will be rendered.
 */
export default function weekPageLoader(content) {
    clearPage(content);
    let existingData;

    try {
        // Try to retrieve existing data from local storage
        existingData = getDataFromLocalStorage(PROJECTS_STORAGE_KEY);
        // Check if existingData is null or undefined
        if (!existingData) {
            // If no existingData exists in local storage, save sample data
            saveDataToLocalStorage(PROJECTS_STORAGE_KEY, sampleData.projects);
        }
    } catch (error) {
        handleStorageError(error);
        // Save sample data to local storage as as fallback
        saveDataToLocalStorage(PROJECTS_STORAGE_KEY, sampleData.projects);
    }
    const todoManager = new TodoManager();
    const todoDueThisWeek = todoManager.getTodosDueThisWeek(existingData);

    const section = document.querySelector('#content');
    const todoContainer = renderContainer(todoDueThisWeek);
    section.appendChild(todoContainer);

    const title = document.querySelector('.title');
    const titleForToday = 'Due This Week';
    title.textContent = title.textContent + ' ' + titleForToday;
}
