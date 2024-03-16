import { getDataFromLocalStorage } from '../utility/localStorageManager';

const PROJECTS_STORAGE_KEY = 'projects';

/**
 * Represents a project.
 *
 * @class
 */
export class Project {
    /**
     * Creates a new project.
     *
     * @constructor
     * @param {number} id - The ID of the project.
     * @param {string} name - The name of the project.
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.todos = [];
    }
}

/**
 * Represents a project manager.
 *
 * @class
 */
export class ProjectManager {
    /**
     * Creates a new project manager.
     *
     * @constructor
     */
    constructor() {
        this.projects = [];
    }

    /**
     * Adds a todo to a project.
     *
     * If the project doesn't exist, a new project will be created.
     * @param {object} todo - The todo object to be added.
     */
    addTodoToProject(todo) {
        let project = this.getProjectByName(todo.project);

        if (project) {
            project.todos.push(todo);
        } else {
            const id = Date.now();
            project = new Project(id, todo.project);
            this.projects.push(project);
            project.todos.push(todo);
        }
    }

    /**
     * Removes a todo from a project.
     *
     * @param {string} projectName - The name of the project.
     * @param {number} todoId - The ID of the todo to be removed.
     */
    removeTodoFromProject(projectName, todoId) {
        const project = this.getProjectByName(projectName);
        if (project) {
            project.todos = project.todos.filter((todo) => todo.id !== todoId);
        } else {
            console.log('No project found with name:', projectName);
        }
    }

    /**
     * Gets a project by its name.
     *
     * @param {string} name - The name of the project.
     * @returns {Project|undefined} The project with the specified name, or undefined if not found.
     */
    getProjectByName(name) {
        return this.projects.find((project) => project.name === name);
    }

    /**
     * Retrieve a project by its ID, including its todos.
     *
     * @param {number} projectId - The ID of the project to retrieve.
     * @returns {Object|null} - The project object with todos if found, or null if not found.
     */
    getProjectById(projectId) {
        const existingData = getDataFromLocalStorage(PROJECTS_STORAGE_KEY);
        if (!existingData) {
            // Handle the case where no data is found in local storage
            return null;
        }
        const selectedProject = existingData.find(
            (project) => project.id === projectId
        );
        if (selectedProject) {
            return {
                ...selectedProject,
                todos: selectedProject.todos || [], // Ensure todos array exists
            };
        }
        return null;
    }

    /**
     * Displays the projects in the navigation bar.
     */
    displayProjectsInNavigationBar() {
        const projects = getDataFromLocalStorage(PROJECTS_STORAGE_KEY); // Retrieve projects from local storage

        if (!projects || projects.length === 0) {
            console.error('No projects found in local storage.');
            return;
        }

        const projectsDropdown = document.getElementById('projects'); // Get the projects dropdown element

        if (!projectsDropdown) {
            console.error('Projects dropdown not found.');
            return;
        }

        const dropdownList = projectsDropdown.querySelector('.cs-drop-ul'); // Get the dropdown list within the projects dropdown

        if (!dropdownList) {
            console.error('Dropdown list not found within projects dropdown.');
            return;
        }

        projects.forEach((project) => {
            const projectItem = document.createElement('li'); // Create a new list item
            projectItem.classList.add('cs-drop-li');

            const projectLink = document.createElement('div'); // Create a link for the project
            projectLink.classList.add('cs-li-link', 'cs-drop-link');
            projectLink.textContent = project.name; // Assuming each project object has a 'name' property
            projectLink.setAttribute('id', project.id);

            projectItem.appendChild(projectLink); // Add the project link to the list item
            dropdownList.appendChild(projectItem); // Add the list item to the dropdown list
        });
    }
}
