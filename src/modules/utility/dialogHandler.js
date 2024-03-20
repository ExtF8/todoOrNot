import { datePickerHandler } from '../utility/datePicker.js';
import { TodoFormHandler } from '../utility/todoFormHandler.js';
import { projectManager } from '../pageLoaders/homePageLoader.js';

/**
 * Handles the dialog functionality based on the button clicked.
 *
 * @param {HTMLElement} button - The button element that triggered the dialog.
 * @param {String} id - The ID of the button element.
 * @param {Object} todoData - The data associated with the todo.
 */
export async function dialogHandler(button, id, todoData) {
    try {
        const newTodoButton = document.getElementById('newTodoButton');
        const detailsButton = document.getElementById(id);
        const dialog = await createDialog();

        if (button === newTodoButton) {
            setupNewTodoDialog(dialog);
        } else if (button === detailsButton) {
            setupDetailsDialog(dialog, todoData);
        }

        setupDialogClose(dialog);
    } catch (error) {
        console.error('Error in dialogHandler:', error);
    }
}

/**
 * Creates a dialog element and appends it to the document body.
 *
 * @returns {Promise<HTMLElement>} - A promise that resolves to the created dialog element.
 */
async function createDialog() {
    const dialog = document.createElement('dialog');
    dialog.id = 'dialog';

    const response = await fetch('dialogFormContent.html');
    if (!response.ok) {
        throw new Error('Failed to fetch dialog form content');
    }

    dialog.innerHTML = await response.text();
    document.body.appendChild(dialog);

    return dialog;
}

/**
 * Sets up the dialog for adding a new todo.
 *
 * @param {HTMLElement} dialog - The dialog element.
 */
function setupNewTodoDialog(dialog) {
    dialog.showModal();
    datePickerHandler();

    const todoFormHandler = todoFormInit();
    setupFormButton(dialog, 'submit', 'Add');
    const form = document.querySelector('#todo-form');
    form.addEventListener('submit', newFormButtonEventHandler);

    function newFormButtonEventHandler(event) {
        event.preventDefault();

        todoFormHandler.handleSubmit(event);
        form.removeEventListener('submit', newFormButtonEventHandler);
    }
}

/**
 * Sets up the dialog for editing todo details.
 *
 * @param {HTMLElement} dialog - The dialog element.
 * @param {Object} todoData - The data associated with the todo.
 */
function setupDetailsDialog(dialog, todoData) {
    dialog.showModal();
    datePickerHandler();

    const todoFormHandler = todoFormInit();

    const formButton = setupFormButton(dialog, 'save', 'Save');
    todoFormInit().populateTodoForm(todoData);

    formButton.addEventListener('click', (event) => {
        detailsFormButtonEventHandler(event);
    });
    const detailsFormButtonEventHandler = (event) => {
        todoFormHandler.handleSave(event, todoData);
        formButton.removeEventListener('click', detailsFormButtonEventHandler);
    };
}

/**
 * Sets up the form button inside the dialog.
 *
 * @param {HTMLElement} dialog - The dialog element.
 * @param {String} type - The type of the form button.
 * @param {String} text - The text content of the form button.
 * @returns {HTMLElement} - The form button element.
 */
function setupFormButton(dialog, type, text) {
    const formButton = dialog.querySelector('#form-button');
    formButton.setAttribute('type', type);
    console.log(formButton);
    formButton.textContent = text;
    return formButton;
}

/**
 * Sets up the close functionality for the dialog.
 *
 * @param {HTMLElement} dialog - The dialog element.
 */
function setupDialogClose(dialog) {
    const dialogClose = dialog.querySelector('#dialog-close-btn');

    dialogClose.addEventListener('click', () => {
        dialogCloseEventHandler();
    });
    const dialogCloseEventHandler = () => {
        const formElement = dialog.querySelector('#todo-form');
        formElement.reset();
        dialog.close();
        removeDialog(dialog);
    };
    dialogClose.removeEventListener('click', () => {
        dialogCloseEventHandler();
    });
}

/**
 * Initializes the TodoFormHandler and returns an instance of it.
 *
 * @returns {TodoFormHandler} - An instance of the TodoFormHandler class.
 */
function todoFormInit() {
    return new TodoFormHandler(document, projectManager);
}

/**
 * Removes the dialog element from the document body.
 *
 * @param {HTMLElement} dialog - The dialog element to be removed.
 */
export function removeDialog(dialog) {
    document.body.removeChild(dialog);
}
