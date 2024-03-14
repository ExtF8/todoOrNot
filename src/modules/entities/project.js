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
     * Gets a project by its ID.
     *
     * @param {number} id - The ID of the project.
     * @returns {Project|undefined} The project with the specified ID, or undefined if not found.
     */
    getProjectById(id) {
        return this.projects.find((project) => project.id === id);
    }
}
