import { datePickerHandler } from '../utility/datePicker.js';
import { TodoFormHandler } from '../utility/todoFormHandler.js';
import {
    projectManager,
    renderContainer,
} from '../pageLoaders/homePageLoader.js';

async function createDialog(content) {
    const dialog = document.createElement('dialog');
    dialog.id = 'dialog';

    dialog.innerHTML = content;

    document.body.appendChild(dialog);

    return dialog;
}

export async function dialogHandler(button, id, todoData) {
    try {
        // console.log(todoFormHandler.handleSave);
        const newTodoButton = document.getElementById('newTodoButton');
        const detailsButton = document.getElementById(id);

        const response = await fetch('dialogFormContent.html');
        if (!response.ok) {
            throw new Error('Failed to fetch dialog form content');
        }
        const html = await response.text();
        const dialog = await createDialog(html);
        let formButton = document.getElementById('form-button');

        if (button === newTodoButton) {
            dialog.showModal();
            datePickerHandler();

            formButton.setAttribute('type', 'submit');
            formButton.textContent = 'Add';
            todoFormInit();

            formButton.addEventListener('click', (event) => {
                todoFormInit().handleSubmit(event)
            })

        } else if (button === detailsButton) {
            // let formButton = document.getElementById('form-button');
            dialog.showModal();
            datePickerHandler();

            formButton.setAttribute('type', 'save');
            formButton.textContent = 'Save';

            todoFormInit().populateTodoForm(todoData);

            formButton.addEventListener('click', (event) => {
                todoFormInit().handleSave(event, todoData)
            })

        }

        const dialogClose = document.getElementById('dialog-close-btn');

        dialogClose.addEventListener('click', () => {
            const formElement = document.getElementById('todo-form');
            let formButton = document.getElementById('form-button');
            formButton.removeAttribute('type');
            formElement.reset();
            dialog.close();

            removeDialog(dialog);
        });
    } catch (error) {
        console.error('Error in dialogHandler:', error);
    }
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
