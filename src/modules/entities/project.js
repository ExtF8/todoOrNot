export class Project {
    constructor(name) {
        (this.name = name), (this.todos = []);
    }
}

export class ProjectManager {
    constructor() {
        this.projects = [];
    }

    addTodoToProject(todo) {
        let project = this.getProjectsByName(todo.project);

        if (project) {
            project.todos.push(todo);
        } else {
            project = new Project(todo.project);
            project.todos.push(todo);
            this.projects.push(project);
        }
    }

    getProjectsByName(name) {
        return this.projects.find((project) => project.name === name);
    }
}
