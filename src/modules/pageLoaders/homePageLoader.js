// Importing utility functions from the 'elementRender' module. These functions are used
// for creating various HTML elements dynamically
import {
    createSection,
    createDiv,
    createPicture,
    createList,
    createListItem,
    createSpan,
    createTopper,
    createTitle,
    createParagraph,
    clearPage,
} from '../utility/elementRender.js';

import { ProjectManager } from '../entities/project.js';
import { TodoFormHandler } from '../utility/todoFormHandler.js';

import { dialogHandler } from '../utility/dialogHandler.js';

/**
 * Loads and displays the home page content
 * @param {HTMLElement} content - The parent element where the home page will be rendered
 */
export default function homePageLoader(content) {
    document.addEventListener('DOMContentLoaded', async function () {
        clearPage(content);

        // Instantiate TodoFormHandler and ProjectManager
        const projectManager = new ProjectManager();

        console.log('projectManager: ', projectManager.projects);

        // Instantiate TodoFormHandler after dialog is shown
        try {
            // Wait for the dialog handler to finish and then instantiate TodoFormHandler
            await dialogHandler();
            const todoFormHandler = new TodoFormHandler();
            console.log('todoFormHandler: ', todoFormHandler);
        } catch (error) {
            console.error('Error instantiating dialog', error);
        }
    });
}
