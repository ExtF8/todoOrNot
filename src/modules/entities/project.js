export class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.todos = [];
    }
}

export class ProjectManager {
    constructor() {
        this.projects = [];
    }

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

    removeTodoFromProject(projectName, todoId) {
        const project = this.getProjectByName(projectName);
        if (project) {
            project.todos = project.todos.filter((todo) => todo.id !== todoId);
        } else {
            console.log('No project found with name:', projectName);
        }
    }

    getProjectByName(name) {
        return this.projects.find((project) => project.name === name);
    }

    getProjectById(id) {
        return this.projects.find((project) => project.id === id);
    }
}
