import { Todo } from '../entities/todoItems.js';
import { sampleData } from '../pageData/sampleData.js';
import {
    getPriorityClass,
    renderTodoItem,
} from '../pageLoaders/homePageLoader.js';
import { removeDialog } from './dialogHandler.js';
import {
    saveDataToLocalStorage,
    getDataFromLocalStorage,
    editDataInLocalStorage,
} from './localStorageManager.js';

const PROJECTS_STORAGE_KEY = 'projects';
/**
 * Represents a form handler for managing todo items.
 */
export class TodoFormHandler {
    /**
     * Creates an instance of TodoFormHandler.
     *
     * @param {Document} document - The document object.
     * @param {ProjectManager} projectManager - The project manager object.
     */
    constructor(document, projectManager) {
        this.document = document;
        this.projectManager = projectManager;
        this.formElement = this.document.getElementById('todo-form');
    }

    /**
     * Handles the form submission event.
     *
     * @param {Event} event - The form submission event.
     */
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

            const dialog = document.getElementById('dialog');
            removeDialog(dialog);
        } catch (error) {
            console.error('Error handling form submission: ', error);
        }
    }

    /**
     * Handles the save event for a specific todo item.
     *
     * @param {Event} event - The save event.
     * @param {Todo} todoData - The todo item data.
     */
    async handleSave(event, todoData) {
        event.preventDefault();
        try {
            // Extract the relevant data from the form
            const formData = this.extractFormData(todoData);
            // Merge the extracted form data with the existing todo data
            const updatedTodoData = { ...todoData, ...formData };
            // Save the updated data to local storage
            await editDataInLocalStorage(
                PROJECTS_STORAGE_KEY,
                todoData.id,
                updatedTodoData
            );

            this.updatedTodoInList(updatedTodoData);
            this.clearForm();
            this.closeDialog();

            const dialog = document.getElementById('dialog');
            removeDialog(dialog);
        } catch (error) {
            console.error('Error saving data: ', error);
        }
    }

    /**
     * Extracts form data from the todo form.
     *
     * @param {Todo} [todoData={}] - The todo item data.
     * @returns {Object} - The extracted form data.
     */
    extractFormData(todoData = {}) {
        const formData = new FormData(this.formElement);
        return {
            id: todoData.id || '',
            title: formData.get('title'),
            project: formData.get('project'),
            description: formData.get('description'),
            dueDate: formData.get('dueDate'),
            priority: formData.get('priority'),
        };
    }

    /**
     * Adds a new todo item to the todo list.
     *
     * @param {Todo} newTodo - The new todo item.
     */
    addNewTodoToList(newTodo) {
        // Get the container element where todos are displayed
        const todoList = document.querySelector('.todo-list');

        // Render the new todo item
        const newTodoItem = renderTodoItem(newTodo);

        // Append the new todo item to the existing list
        todoList.appendChild(newTodoItem);
    }

    /**
     * Adds a new todo item to the existing data.
     *
     * @param {Array} existingData - The existing data.
     * @param {Todo} newTodo - The new todo item.
     * @returns {Array} - The updated data.
     */
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

    /**
     * Updates a todo item in the todo list.
     *
     * @param {Todo} updatedTodo - The updated todo item.
     */
    updatedTodoInList(updatedTodo) {
        // Get the container where todos are displayed
        const todoList = document.querySelector('.todo-list');

        // Find the existing todo item in the list by its ID
        const todoItem = todoList.querySelector(`#todo-${updatedTodo.id}`);

        if (todoItem) {
            todoItem.querySelector('.todo-title').textContent =
                updatedTodo.title;
            todoItem.querySelector('.todo-dueDate').textContent =
                updatedTodo.dueDate;
            todoItem.className = `todo-container ${getPriorityClass(
                updatedTodo.priority
            )}`;
        }
    }

    /**
     * Creates a new todo item from form data.
     *
     * @param {Object} formData - The form data.
     * @returns {Todo} - The new todo item.
     */
    createTodoFromFormData(formData) {
        const random = Math.random().toFixed();
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

    /**
     * Populates the todo form with data.
     *
     * @param {Todo} todoData - The todo item data.
     */
    populateTodoForm(todoData) {
        const todoForm = this.formElement;
        todoForm.elements.id = todoData.id;
        todoForm.elements['title'].value = todoData.title;
        todoForm.elements['project'].value = todoData.project;
        todoForm.elements['description'].value = todoData.description;
        todoForm.elements['dueDate'].value = todoData.dueDate;
        todoForm.elements['priority'].value = todoData.priority;
    }

    /**
     * Closes the dialog.
     */
    closeDialog() {
        const dialog = this.document.getElementById('dialog');
        dialog.close();
    }

    /**
     * Clears the form.
     */
    clearForm() {
        this.formElement.reset();
    }
}
