import {
    createDiv,
    createTitle,
    createList,
    createListItem,
    createParagraph,
    createDeleteIcon,
} from '../utility/elementRender.js';

import { sampleData } from '../pageData/sampleData.js';
import { TodoManager } from '../entities/todoItems.js';


/**
 * Renders the primary container for the home page.
 *
 * @param {Object|Array} projectData - The data containing project(s) information.
 * If an object is provided, it should represent a single project.
 * If an array is provided, it should contain multiple project objects.
 * @returns {HTMLDivElement} - The container div element.
 */
export function renderContainer(projectData) {
    // Use projectsData if provided, Otherwise fallback to sample data
    const project = projectData || sampleData.projects;

    const container = createDiv('class', 'todo-home-container');
    const title = createTitle('class', 'title', 'Todos');
    container.appendChild(title);

    // Render the list of todos
    const todosList = renderTodosList(project);
    if (todosList) {
        container.appendChild(todosList);
    } else {
        console.error('Error rendering todo list: Data empty or null');
    }

    return container;
}

/**
 * Renders a list of todos.
 *
 * @param {Array} projects - Array of project objects, each containing todo items.
 * @returns {HTMLUListElement} - The list element containing todos.
 */
export function renderTodosList(projects) {
    if (!projects || projects.length === 0) {
        return null;
    }

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
 * Renders a single todo item.
 *
 * @param {Object} todo - Todo object.
 * @returns {HTMLLIElement} - The list item element representing a todo.
 */
export function renderTodoItem(todo) {
    const priorityClass = getPriorityClass(todo.priority);
    const listItem = createListItem(
        'class',
        `todo-container ${priorityClass}`,
        todo,
        renderTodoContent
    );
    listItem.id = `todo-${todo.id}`;
    return listItem;
}

/**
 * Renders the content of a single todo item.
 *
 * @param {Object} todo - The todo object containing information about todo content.
 * @returns {HTMLDivElement} - The container div element representing the content of the todo item.
 */
export function renderTodoContent(todo) {
    const container = createDiv('class', 'todo-content');
    const checkbox = createDiv('class', 'todo-checkbox');
    const todoTitle = createTitle('class', 'todo-title', todo.title);
    const todoDueDate = createParagraph('class', 'todo-dueDate', todo.dueDate);
    const todoDetails = createDiv('class', 'todo-item');
    const todoDelete = createDiv('class', 'todo-item');

    todoDetails.classList.add('details');
    todoDetails.textContent = 'Details';
    todoDetails.id = todo.id + 'details';
    const todoDetailsId = todoDetails.id;

    todoDelete.classList.add('delete');
    todoDelete.id = todo.id + 'delete';

    const todoManager = new TodoManager(
        todo.id,
        todo.title,
        todo.project,
        todo.description,
        todo.dueDate,
        todo.priority,
        todo.completed
    );

    todoManager.checkboxHandler(checkbox, todoTitle, todoDueDate, todo.id);
    todoManager.todoDeleteHandler(todoDelete, todo.id, todo.project);
    todoManager.todoDetailsHandler(todoDetails, todoDetailsId, todo.id);

    const deleteIcon = createDeleteIcon();
    todoDelete.appendChild(deleteIcon);

    container.appendChild(checkbox);
    container.appendChild(todoTitle);
    container.appendChild(todoDueDate);
    container.appendChild(todoDetails);
    container.appendChild(todoDelete);

    return container;
}

/**
 * Determines the CSS class name for visual representation of todo item priority.
 *
 * @param {String} priority - The priority value of the todo item.
 * @returns {String} - The CSS class name corresponding to the priority.
 */
export function getPriorityClass(priority) {
    switch (priority) {
        case 'low':
            return 'priority-low';
        case 'medium':
            return 'priority-medium';
        case 'high':
            return 'priority-high';
        default:
            return 'priority-low'; // Default class if priority is not specified
    }
}

/**
 * Handles the error that occurs while retrieving data from local storage.
 *
 * @param {Error} error - The error object representing the storage error.
 */
export function handleStorageError(error) {
    console.error('Error retrieving data from local storage: ', error);
}

/**
 * Handles the error that occurs while instantiating dialog.
 *
 * @param {Error} error - The error object representing the dialog error.
 */
export function handleDialogError(error) {
    console.error('Error instantiating dialog', error);
}