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

import { projectsData } from '../pageData/projectsDataMockUp.js';

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

        const section = document.querySelector('#content');

        const todoContainer = renderContainer();
        section.appendChild(todoContainer);

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

/**
 * Renders the primary container for the home page
 * @returns {HTMLDivElement} - The container div element
 */
function renderContainer() {
    const container = createDiv('class', 'todo-home-container');

    const title = createTitle('class', 'title', 'Todos');
    container.appendChild(title);

    const todosList = renderTodosList(projectsData.projects);
    container.appendChild(todosList);

    return container;
}

/**
 * Renders a list of todos
 * @param {Array} projects - Array of project objects
 * @returns {HTMLUListElement} - The list element containing todos
 */
function renderTodosList(projects) {
    const list = createList('class', 'todo-list');

    projects.forEach((project) => {
        project.todos.forEach((todo) => {
            const listItem = renderTodoItem(todo);
            list.appendChild(listItem);
        });
    });

    return list;
}

/**
 * Renders a single todo item
 * @param {Object} todo - Todo object
 * @returns {HTMLLIElement} - The list item element representing a todo
 */
function renderTodoItem(todo) {
    const listItem = createListItem(
        'class',
        'todo-container',
        todo,
        renderTodoContent
    );
    return listItem;
}

function renderTodoContent(todo) {
    const container = createDiv('class', 'todo-content');

    const checkbox = createDiv('class', 'todo-complete');
    const todoTitle = createTitle('class', 'todo-title', todo.title);

    const todoDueDate = createParagraph('class', 'todo-dueDate', todo.dueDate);
    const editTodo = createDiv('class', 'todo-item');
    editTodo.textContent = 'Edit';

    const deleteTodo = createDiv('class', 'todo-item');
    deleteTodo.textContent = 'DEL';

    container.appendChild(checkbox);
    container.appendChild(todoTitle);
    container.appendChild(todoDueDate);
    container.appendChild(editTodo);
    container.appendChild(deleteTodo);

    return container;
}

export { projectManager };
