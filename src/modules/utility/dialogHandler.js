import { datePickerHandler } from '../utility/datePicker.js';

const newTodoButton = document.getElementById('newTodoButton');
const dialog = document.querySelector('dialog');
const dialogClose = document.getElementById('dialog-close-btn');

export function dialogHandler() {
    newTodoButton.addEventListener('click', () => {
        dialog.showModal();
        datePickerHandler();
    });
    dialogClose.addEventListener('click', () => {
        dialog.close();
    });
}

