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

const projectManager = new ProjectManager();

const todoFormInit = () => {
    const todoFormHandler = new TodoFormHandler(document, projectManager);
    return todoFormHandler;
};
/**
 * Loads and displays the home page content
 * @param {HTMLElement} content - The parent element where the home page will be rendered
 */
export default function homePageLoader(content) {
    document.addEventListener('DOMContentLoaded', async function () {
        clearPage(content);

        // Wait for the dialog handler to finish and then instantiate TodoFormHandler
        try {
            // Instantiate TodoFormHandler after dialog is shown
            await dialogHandler();
            todoFormInit();
        } catch (error) {
            console.error('Error instantiating dialog', error);
        }
    });
}

export { projectManager };
