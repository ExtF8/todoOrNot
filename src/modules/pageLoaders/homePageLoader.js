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

import { dialogHandler} from '../utility/dialogHandler.js';

/**
 * Loads and displays the home page content
 * @param {HTMLElement} content - The parent element where the home page will be rendered
 */
export default function homePageLoader(content) {
    clearPage(content);

    // Instantiate TodoFormHandler and ProjectManager
    const projectManager = new ProjectManager();
    const todoFormHandler = new TodoFormHandler();

    console.log('projectManager: ', projectManager.projects);
    console.log('todoFormHandler: ', todoFormHandler);

    dialogHandler();

    // Select the main content area in the DOM

    // const homePageContent = content;
    // console.log('homePageContent: ', homePageContent);

    // // Create and append the main section and content div
    // const div = createDiv('class', 'test');

    // console.log(div);
    // homePageContent.appendChild(div);



}
