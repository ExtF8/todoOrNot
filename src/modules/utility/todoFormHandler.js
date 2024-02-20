import { ProjectManager } from '../entities/project.js';
import { Todo } from '../entities/todoItems.js';

const projectManager = new ProjectManager();

export class TodoFormHandler {
    constructor() {
        this.formElement = document.getElementById('todo-form');
        this.formElement.addEventListener(
            'submit',
            this.handleSubmit.bind(this)
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const project = document.getElementById('project').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.querySelector(
            'input[name="priority"]:checked'
        ).value;

        const newTodo = new Todo(
            title,
            project,
            description,
            dueDate,
            priority
        );


        projectManager.addTodoToProject(newTodo);

        console.log(projectManager.projects);

        this.clearForm();

        this.closeDialog();
    }

    closeDialog() {
        const dialog = document.getElementById('dialog');
        dialog.close();
    }

    clearForm() {
        document.getElementById('title').value = '';
        document.getElementById('project').value = '';
        document.getElementById('description').value = '';
        document.getElementById('dueDate').value = '';

        const priorityRadios = document.querySelectorAll(
            'input[name="priority"]:checked'
        );
        priorityRadios.forEach((radio) => {
            radio.checked = false;
        });
    }
}
