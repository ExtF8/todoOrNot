import { projectManager } from '../pageLoaders/homePageLoader.js';
import { renderContainer } from '../utility/todoRenderer.js';
import { dialogHandler } from '../utility/dialogHandler.js';
import { clearPage } from '../utility/elementRender.js';
import {
    getDataFromLocalStorage,
    removeTodoFromLocalStorage,
    saveDataToLocalStorage,
} from '../utility/localStorageManager.js';

const PROJECTS_STORAGE_KEY = 'projects';

/**
 * Represents a Todo item.
 *
 * @class
 */
export class Todo {
    /**
     * Create a Todo item.
     *
     * @constructor
     * @param {number} id - The ID of the Todo item.
     * @param {string} title - The title of the Todo item.
     * @param {string} project - The project of the Todo item.
     * @param {string} description - The description of the Todo item.
     * @param {string} dueDate - The due date of the Todo item.
     * @param {string} priority - The priority of the Todo item.
     */
    constructor(id, title, project, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
}

/**
 * Represents a Todo Manager.
 *
 * @class
 */
export class TodoManager {
    /**
     * Create a Todo Manager.
     *
     * @constructor
     * @param {number} todoId - The ID of the Todo item.
     * @param {string} todoTitle - The title of the Todo item.
     * @param {string} projectName - The project name of the Todo item.
     * @param {string} todoDescription - The description of the Todo item.
     * @param {string} todoDueDate - The due date of the Todo item.
     * @param {string} todoPriority - The priority of the Todo item.
     * @param {boolean} todoCompleted - The completion status of the Todo item.
     */
    constructor(
        todoId,
        todoTitle,
        projectName,
        todoDescription,
        todoDueDate,
        todoPriority,
        todoCompleted
    ) {
        this.todoId = todoId;
        this.todoTitle = todoTitle;
        this.projectName = projectName;
        this.todoDescription = todoDescription;
        this.todoDueDate = todoDueDate;
        this.todoPriority = todoPriority;
        this.todoCompleted = todoCompleted;
    }

    /**
     * Handles the checkbox click event for a Todo item.
     *
     * @param {HTMLElement} checkbox - The checkbox element.
     * @param {HTMLElement} todoTitle - The title element of the Todo item.
     * @param {HTMLElement} todoDueDate - The due date element of the Todo item.
     * @param {number} todoId - The ID of the Todo item.
     */
    checkboxHandler(checkbox, todoTitle, todoDueDate, todoId) {
        // Retrieve the completion status from local storage
        const existingData = getDataFromLocalStorage(PROJECTS_STORAGE_KEY);

        const todo = this.findTodoById(existingData, todoId);
        if (!todo) {
            console.error('Todo with ID', todoId, 'not found.');
            return;
        }
        const isCompleted = todo.completed;

        // Set initial visual representation based on completion status
        if (isCompleted) {
            checkbox.classList.add('todo-checked');
            todoTitle.style.textDecoration = 'line-through';
            todoDueDate.style.textDecoration = 'line-through';
        }

        checkbox.addEventListener('click', (event) => {
            event.preventDefault();
            // Toggle the 'todo-checked' class
            checkbox.classList.toggle('todo-checked');

            // Toggle line through todo title and due date
            const isCompleted = checkbox.classList.contains('todo-checked');
            todoTitle.style.textDecoration = isCompleted ? 'line-through' : '';
            todoDueDate.style.textDecoration = isCompleted
                ? 'line-through'
                : '';

            // Update todo completion status in local storage
            this.updateTodoCompletion(todoId, isCompleted);
        });
    }

    /**
     * Handles the delete button click event for a Todo item.
     *
     * @param {HTMLElement} todoDelete - The delete button element.
     * @param {number} todoId - The ID of the Todo item.
     * @param {string} projectName - The project name of the Todo item.
     */
    todoDeleteHandler(todoDelete, todoId, projectName) {
        todoDelete.addEventListener('click', (event) => {
            event.preventDefault();
            const todoToRemove = todoId;

            let existingData = getDataFromLocalStorage(PROJECTS_STORAGE_KEY);

            let updatedData = removeTodoFromLocalStorage(
                existingData,
                todoToRemove
            );

            saveDataToLocalStorage(PROJECTS_STORAGE_KEY, updatedData);

            projectManager.removeTodoFromProject(projectName, todoToRemove);

            const section = document.querySelector('#content');
            const todoContainer = renderContainer(existingData);
            clearPage(section);
            section.appendChild(todoContainer);
        });
    }

    /**
     * Updates the completion status of a Todo item.
     *
     * @param {number} todoId - The ID of the Todo item.
     * @param {boolean} isCompleted - The completion status of the Todo item.
     */
    updateTodoCompletion(todoId, isCompleted) {
        try {
            const existingData = getDataFromLocalStorage(PROJECTS_STORAGE_KEY);

            if (existingData === null) {
                console.error(
                    'Cannot update todo completion status: No existing data found in local storage'
                );
                return;
            }

            const updatedData = existingData.map((project) => ({
                ...project,
                todos: project.todos.map((todo) => {
                    if (todo.id === todoId) {
                        return { ...todo, completed: isCompleted };
                    }
                    return todo;
                }),
            }));

            saveDataToLocalStorage(PROJECTS_STORAGE_KEY, updatedData);
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Handles the details button click event for a Todo item.
     *
     * @param {HTMLElement} todoDetails - The details button element.
     * @param {HTMLElement} todoDetailsId - The details ID element.
     * @param {number} id - The ID of the Todo item.
     */
    todoDetailsHandler(todoDetails, todoDetailsId, id) {
        todoDetails.addEventListener('click', async (event) => {
            event.preventDefault();
            try {
                // Retrieve todo data from local storage based on todo ID
                const existingData =
                    getDataFromLocalStorage(PROJECTS_STORAGE_KEY);
                const todoData = this.findTodoById(existingData, id);

                if (!todoData) {
                    console.error(
                        'Todo with id: ',
                        id,
                        'not found in local storage'
                    );
                    return;
                }

                await dialogHandler(todoDetails, todoDetailsId, todoData); // Pass details element and its id
            } catch (error) {
                console.error('Error handling details click: ', error);
            }
        });
    }

    /**
     * Retrieves the todos that are due today.
     *
     * @param {Array} existingData - The existing todo items data.
     * @returns {Array} - The filtered todo items due today.
     */
    getTodosDueToday(existingData) {
        // Get today's date in format ('Y-m-d')
        const today = new Date().toISOString().split('T')[0];
        // Get filtered projects based on today
        const filteredTodosForToday = this.getFilteredProjects(
            existingData,
            today,
            today
        );
        return filteredTodosForToday;
    }

    /**
     * Retrieves todos due within the current week.
     *
     * @param {Array} existingData - The existing todo data.
     * @returns {Array} - The filtered todos due within the current week.
     */
    getTodosDueThisWeek(existingData) {
        // Get start of the current week
        const startOfWeek = new Date();
        // Set to Monday of the current week
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1);
        startOfWeek.toISOString().split('T')[0];

        // Get end of the current week
        const endOfWeek = new Date(startOfWeek);
        // Set to Sunday of the current week
        endOfWeek.setDate(endOfWeek.getDate() + 6);
        endOfWeek.toISOString().split('T')[0];

        const filteredTodosForThisWeek = this.getFilteredProjects(
            existingData,
            startOfWeek,
            endOfWeek
        );

        return filteredTodosForThisWeek;
    }

    /**
     * Filters projects and their todos based on the dueDate
     * being within the specified date range.
     *
     * @param {Array} existingData - The array of existing projects and todos.
     * @param {string} startDate - The start date of the date range.
     * @param {string} endDate - The end date of the date range.
     * @returns {Array} - The filtered projects and their todos.
     */
    getFilteredProjects(existingData, startDate, endDate) {
        // Filter projects and their todos based on the dueDate being within the specified date range
        // Need to filter projects because renderTodosList method expects projects
        const filteredProjects = existingData
            .map((project) => ({
                ...project,
                todos: project.todos.filter((todo) => {
                    // Convert todo due date string to a Date object
                    const todoDueDate = new Date(todo.dueDate);
                    // Check if todo due date falls within the specified date range
                    const todoDateRange =
                        todoDueDate >= new Date(startDate) &&
                        todoDueDate <= new Date(endDate);

                    return todoDateRange;
                }),
            }))
            .filter((project) => project.todos.length > 0);

        return filteredProjects;
    }

    /**
     * Retrieves todos for a specific project from existing data.
     *
     * @param {Array} existingData - The existing data containing todos for multiple projects.
     * @param {string} projectName - The name of the project to retrieve todos for.
     * @returns {Array|null} - An array of todos for the specified project, or null if the project is not found.
     */
    getTodosForProject(existingData, projectName) {
        // const existingData = getDataFromLocalStorage(PROJECTS_STORAGE_KEY);
        if (!existingData) {
            console.error('No existing data found in local storage');
            return null;
        }

        const filteredProjects = existingData.filter(
            (project) => project.name === projectName
        );

        if (!filteredProjects.length === 0) {
            console.error(`Project '${projectName}' not found`);
            return null;
        }
        return filteredProjects;
    }

    /**
     * Finds a Todo item by its ID.
     *
     * @param {Array} existingData - The existing data from local storage.
     * @param {number} todoId - The ID of the Todo item.
     * @returns {object|null} - The Todo item if found, otherwise null.
     */
    findTodoById(existingData, todoId) {
        for (const project of existingData) {
            for (const todo of project.todos) {
                if (todo.id === todoId) {
                    return todo;
                }
            }
        }
        return null; // Return null if no todo with the specified ID is found
    }
}
