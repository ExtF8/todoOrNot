import flatpickr from 'flatpickr';
import { format } from 'date-fns';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

export function datePickerHandler() {
    // Initialize Flatpickr on the dueDate input field
    const dueDateInput = document.getElementById('dueDate');
    const fp = flatpickr(dueDateInput, {
        static: true,
        dateFormat: 'Y-m-d',
        minDate: 'today',
        theme: 'dark',
    });

    // Add an event listener to the input field to format the date using date-fns when it changes
    dueDateInput.addEventListener('change', (event) => {
        const selectedDate = new Date(event.target.value);
        console.log(selectedDate);
        const formattedDate = format(selectedDate, 'P');

        fp.set('dateFormat', formattedDate);
    });
}
