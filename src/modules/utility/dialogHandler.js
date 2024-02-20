import { datePickerHandler } from '../utility/datePicker.js';

export function createDialog(content) {
    const dialog = document.createElement('dialog');
    dialog.id = 'dialog';

    dialog.innerHTML = content;

    document.body.appendChild(dialog);
    return dialog;
}

export async function dialogHandler() {
    const newTodoButton = document.getElementById('newTodoButton');
    try {
        const response = await fetch('dialogFormContent.html');
        if (!response.ok) {
            throw new Error('Failed to fetch dialog form content');
        }
        const html = await response.text();
        const dialog = createDialog(html);
        const dialogClose = document.getElementById('dialog-close-btn');

        newTodoButton.addEventListener('click', () => {
            dialog.showModal();
            datePickerHandler();
        });

        dialogClose.addEventListener('click', () => {
            dialog.close();
        });
    } catch (error) {
        console.error(error);
    }
}
