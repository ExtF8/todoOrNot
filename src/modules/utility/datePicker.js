import flatpickr from 'flatpickr';
import { format } from 'date-fns';
import 'flatpickr/dist/flatpickr.min.css';


export function datePickerHandler() {
    // Initialize Flatpickr on the dueDate input field
    const dueDateInput = document.getElementById('dueDate');

    flatpickr(dueDateInput, {
        static: true,
        altInput: true,
        altFormat: "d/m/Y",
        dateFormat: "Y-m-d",
        minDate: 'today',
    });

    // Add an event listener to the input field to format the date using date-fns when it changes
    dueDateInput.addEventListener('change', (event) => {
        const selectedDate = new Date(event.target.value);
        const formattedDate = format(selectedDate, 'MMMM dd, yyyy');
        console.log(formattedDate);
    });

}

