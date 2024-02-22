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
        let project = this.getProjectsByName(todo.project);
        let id = Date.now();


        if (project) {
            project.todos.push(todo);
        } else {
            project = new Project(id, todo.project);
            this.projects.push(project);
            project.todos.push(todo);
        }
    }

    removeTodoFromProject(projectName, todoId) {
        const project = this.getProjectsByName(projectName);
        if (project) {
            project.todos = project.todos.filter((todo) => todo.id !== todoId);
        } else {
            console.log('No todos found');
        }
    }

    getProjectsByName(name) {
        return this.projects.find((project) => project.name === name);
    }
}
