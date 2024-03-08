import { projectManager, renderContainer } from '../pageLoaders/homePageLoader.js';
import { clearPage } from '../utility/elementRender.js';
import {
    getDataFromLocalStorage,
    removeTodoFromLocalStorage,
    saveDataToLocalStorage,
} from '../utility/localStorageManager.js';

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

    checkboxHandler(checkbox, todoTitle, todoDueDate) {
        checkbox.addEventListener('click', (event) => {
            event.preventDefault();
            if (checkbox.classList.contains('todo-checked')) {
                checkbox.classList.remove('todo-checked');
                todoTitle.style.textDecoration = '';
                todoDueDate.style.textDecoration = '';
            } else {
                todoTitle.style.textDecoration = 'line-through';
                todoDueDate.style.textDecoration = 'line-through';
                checkbox.classList.add('todo-checked');
            }
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
}
