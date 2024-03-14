import { datePickerHandler } from '../utility/datePicker.js';
import { TodoFormHandler } from '../utility/todoFormHandler.js';
import { projectManager } from '../pageLoaders/homePageLoader.js';

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

function setupNewTodoDialog(dialog) {
    dialog.showModal();
    datePickerHandler();

    const formButton = setupFormButton(dialog, 'submit', 'Add');

    formButton.addEventListener('click', (event) => {
        todoFormInit().handleSubmit(event);
    });
}

function setupDetailsDialog(dialog, todoData) {
    dialog.showModal();
    datePickerHandler();

    const formButton = setupFormButton(dialog, 'save', 'Save');
    todoFormInit().populateTodoForm(todoData);

    formButton.addEventListener('click', (event) => {
        todoFormInit().handleSave(event, todoData);
    });
}

function setupFormButton(dialog, type, text) {
    const formButton = dialog.querySelector('#form-button');
    formButton.setAttribute('type', type);
    formButton.textContent = text;
    return formButton;
}

function setupDialogClose(dialog) {
    const dialogClose = dialog.querySelector('#dialog-close-btn');

    dialogClose.addEventListener('click', () => {
        const formElement = dialog.querySelector('#todo-form');
        formElement.reset();
        dialog.close();
        removeDialog(dialog);
    });
}

/**
 * Initializes the TodoFormHandler and returns an instance of it.
 *
 * @returns {TodoFormHandler} - An instance of the TodoFormHandler class.
 */
function todoFormInit() {
    const todoFormHandler = new TodoFormHandler(document, projectManager);
    return todoFormHandler;
}

export function removeDialog(dialog) {
    document.body.removeChild(dialog);
}
