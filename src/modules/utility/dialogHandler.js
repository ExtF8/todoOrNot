import { datePickerHandler } from '../utility/datePicker.js';

async function createDialog(content) {
    const dialog = document.createElement('dialog');
    dialog.id = 'dialog';

    dialog.innerHTML = content;

    document.body.appendChild(dialog);

    return dialog;
}

export async function dialogHandler(button, detailsId) {
    try {
        const newTodoButton = document.getElementById('newTodoButton');
        const detailsButton = document.getElementById(detailsId);

        const response = await fetch('dialogFormContent.html');
        if (!response.ok) {
            throw new Error('Failed to fetch dialog form content');
        }
        const html = await response.text();

        if (button === newTodoButton) {
            const dialog = await createDialog(html);
            let formButton = document.getElementById('form-button');
            button.addEventListener('click', () => {
                formButton.textContent = 'Add';
                dialog.showModal();
                datePickerHandler();
            });
        } else if (button === detailsButton) {
            let formButton = document.getElementById('form-button');
            formButton.textContent = 'Save';

            dialog.showModal();
            datePickerHandler();
        }

        const dialogClose = document.getElementById('dialog-close-btn');

        dialogClose.addEventListener('click', () => {
            const formElement = document.getElementById('todo-form');
            dialog.close();
            formElement.reset();
        });
    } catch (error) {
        console.error('Error in dialogHandler:', error);
    }
}
