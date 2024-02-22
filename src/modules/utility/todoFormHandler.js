import { projectManager } from '../pageLoaders/homePageLoader.js';
import { Todo } from '../entities/todoItems.js';

export class TodoFormHandler {
    constructor(document) {
        this.document = document;
        this.projectManager = projectManager;

        this.formElement = this.document.getElementById('todo-form');
        this.formElement.addEventListener(
            'submit',
            this.handleSubmit.bind(this)
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        const todoId = Date.now();
        const title = this.document.getElementById('title').value;
        const project = this.document.getElementById('project').value;
        const description = this.document.getElementById('description').value;
        const dueDate = this.document.getElementById('dueDate').value;
        const priority = this.document.querySelector(
            'input[name="priority"]:checked'
        ).value;

        const newTodo = new Todo(
            todoId,
            title,
            project,
            description,
            dueDate,
            priority
        );

        this.projectManager.addTodoToProject(newTodo);

        // Accessing and logging the projects and todos
        console.log('All projects:', projectManager.projects);

        projectManager.projects.forEach((project) => {
            console.log(`Project: ${project.name}`);
            console.log('Project ID: ', project.id)
            console.log('Todos:', project.todos);
            console.log('Todo ID: ', newTodo.id);
        });

        console.log('Form submitted');
        this.clearForm();

        this.closeDialog();
    }

    closeDialog() {
        const dialog = this.document.getElementById('dialog');
        dialog.close();
    }

    clearForm() {
        this.document.getElementById('title').value = '';
        this.document.getElementById('project').value = '';
        this.document.getElementById('description').value = '';
        this.document.getElementById('dueDate').value = '';

        const priorityRadios = this.document.querySelectorAll(
            'input[name="priority"]:checked'
        );
        priorityRadios.forEach((radio) => {
            radio.checked = false;
        });
    }
}
