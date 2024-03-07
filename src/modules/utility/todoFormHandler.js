import { Todo } from '../entities/todoItems.js';
import { sampleData } from '../pageData/sampleData.js';
import { renderTodoItem } from '../pageLoaders/homePageLoader.js';
import {
    saveDataToLocalStorage,
    getDataFromLocalStorage,
} from './localStorageManager.js';

const PROJECTS_STORAGE_KEY = 'projects';
export class TodoFormHandler {
    constructor(document, projectManager) {
        this.document = document;
        this.projectManager = projectManager;

        this.formElement = this.document.getElementById('todo-form');
        this.formElement.addEventListener(
            'submit',
            this.handleSubmit.bind(this)
        );
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const formData = this.extractFormData();
            const newTodo = this.createTodoFromFormData(formData);

            // Retrieve existing data from local storage
            let existingData = getDataFromLocalStorage(PROJECTS_STORAGE_KEY);
            if (!existingData) {
                existingData = sampleData.projects; // Fall back to sample data if no existing data
            }

            // Add the new todo to existing data
            const updatedData = this.addTodoToExistingData(
                existingData,
                newTodo
            );

            // Save the updated data back to local storage
            await saveDataToLocalStorage(PROJECTS_STORAGE_KEY, updatedData);

            this.addNewTodoToList(newTodo);

            this.clearForm();
            this.closeDialog();
        } catch (error) {
            console.error('Error handling form submission: ', error);
        }
    }

    addNewTodoToList(newTodo) {
        // Get the container element where todos are displayed
        const todoList = document.querySelector('.todo-list');

        // Render the new todo item
        const newTodoItem = renderTodoItem(newTodo);

        // Append the new todo item to the existing list
        todoList.appendChild(newTodoItem);
    }

    addTodoToExistingData(existingData, newTodo) {
        // Check if there's a project matching the new todo's project name
        const projectIndex = existingData.findIndex(
            (project) => project.name === newTodo.project
        );

        if (projectIndex !== -1) {
            // Add the new todo to the existing project
            existingData[projectIndex].todos.push(newTodo);
        } else {
            // Create a new project with the new todo
            existingData.push({
                id: Date.now(), // Generate a unique id
                name: newTodo.project,
                todos: [newTodo],
            });
        }

        return existingData;
    }

    extractFormData() {
        const formData = new FormData(this.formElement);
        return {
            title: formData.get('title'),
            project: formData.get('project'),
            description: formData.get('description'),
            dueDate: formData.get('dueDate'),
            priority: formData.get('priority'),
        };
    }

    // convertTodo
    createTodoFromFormData(formData) {
        const random = Math.random().toFixed()
        const id = Date.now() + random;
        return new Todo(
            id,
            formData.title,
            formData.project,
            formData.description,
            formData.dueDate,
            formData.priority
        );
    }

    closeDialog() {
        const dialog = this.document.getElementById('dialog');
        dialog.close();
    }

    clearForm() {
        this.formElement.reset();
    }
}
