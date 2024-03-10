import {
    projectManager,
    renderContainer,
} from '../pageLoaders/homePageLoader.js';
import { dialogHandler } from '../utility/dialogHandler.js';
import { clearPage } from '../utility/elementRender.js';
import {
    getDataFromLocalStorage,
    removeTodoFromLocalStorage,
    saveDataToLocalStorage,
} from '../utility/localStorageManager.js';
import { TodoFormHandler } from '../utility/todoFormHandler.js';

const PROJECTS_STORAGE_KEY = 'projects';

export class Todo {
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

export class TodoManager {
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

    todoDetailsHandler(
        todoDetails,
        todoDetailsId,
        todoId,
        todoTitle,
        todoProject,
        todoDescription,
        todoDueDate,
        todoPriority,
        todoCompleted
    ) {
        const formData = {
            todoId,
            todoTitle,
            todoProject,
            todoDescription,
            todoDueDate,
            todoPriority,
            todoCompleted,
        };
        todoDetails.addEventListener('click', async () => {
            try {
                await dialogHandler(todoDetails, todoDetailsId); // Pass details element and its id
                const todoFormHandler = new TodoFormHandler(
                    document,
                    projectManager
                );
                todoFormHandler.populateTodoForm(formData);
            } catch (error) {
                console.error('Error handling details click: ', error);
            }
        });
    }

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
