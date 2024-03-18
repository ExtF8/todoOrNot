export const sampleData = {
    projects: [
        {
            id: 1,
            name: 'Work',
            todos: [
                {
                    id: 11,
                    title: 'Meeting with clients',
                    project: 'Work',
                    description: 'Discuss project requirements',
                    dueDate: '',
                    priority: 'high',
                    completed: true,
                },
                {
                    id: 22,
                    title: 'Prepare presentation',
                    project: 'Work',
                    description: 'Create slides for the upcoming presentation',
                    dueDate: '',
                    priority: 'medium',
                    completed: false,
                },
            ],
        },
        {
            id: 2,
            name: 'Personal',
            todos: [
                {
                    id: 33,
                    title: 'Go grocery shopping',
                    project: 'Personal',
                    description: 'Buy fruits, vegetables, and milk',
                    dueDate: '',
                    priority: 'high',
                    completed: true,
                },
                {
                    id: 44,
                    title: 'Gym workout',
                    project: 'Personal',
                    description: 'Cardio and weight training session',
                    dueDate: '',
                    priority: 'low',
                    completed: false,
                },
            ],
        },
        {
            id: 3,
            name: 'Home Improvement',
            todos: [
                {
                    id: 55,
                    title: 'Paint living room walls',
                    project: 'Home Improvement',
                    description: 'Choose paint color and buy supplies',
                    dueDate: '',
                    priority: 'medium',
                    completed: true,
                },
                {
                    id: 66,
                    title: 'Fix leaking faucet',
                    project: 'Home Improvement',
                    description: 'Call plumber to fix the kitchen faucet',
                    dueDate: '',
                    priority: 'high',
                    completed: true,
                },
            ],
        },
        {
            id: 4,
            name: 'Fitness Goals',
            todos: [
                {
                    id: 77,
                    title: 'Run 5 miles',
                    project: 'Fitness Goals',
                    description: 'Run in the park early morning',
                    dueDate: '',
                    priority: 'high',
                    completed: false,
                },
                {
                    id: 88,
                    title: 'Try new yoga class',
                    project: 'Fitness Goals',
                    description: 'Attend the evening yoga class at the gym',
                    dueDate: '',
                    priority: 'medium',
                    completed: false,
                },
            ],
        },
        {
            id: 5,
            name: 'Vacation Planning',
            todos: [
                {
                    id: 99,
                    title: 'Book flight tickets',
                    project: 'Vacation Planning',
                    description: 'Search for best deals and book tickets',
                    dueDate: '',
                    priority: 'high',
                    completed: false,
                },
                {
                    id: 1010,
                    title: 'Research accommodation options',
                    project: 'Vacation Planning',
                    description: 'Find suitable hotels or Airbnb',
                    dueDate: '',
                    priority: 'medium',
                    completed: false,
                },
                {
                    id: 1111,
                    title: 'Plan itinerary',
                    project: 'Vacation Planning',
                    description:
                        'Research attractions and create a travel plan',
                    dueDate: '',
                    priority: 'high',
                    completed: false,
                },
                {
                    id: 1212,
                    title: 'Pack luggage',
                    project: 'Vacation Planning',
                    description: 'Make a list of essentials and pack luggage',
                    dueDate: '',
                    priority: 'medium',
                    completed: false,
                },
                {
                    id: 1313,
                    title: 'Check travel documents',
                    project: 'Vacation Planning',
                    description:
                        'Ensure passports, visas, and tickets are ready',
                    dueDate: '',
                    priority: 'high',
                    completed: false,
                },
                {
                    id: 1414,
                    title: 'Confirm accommodation bookings',
                    project: 'Vacation Planning',
                    description: 'Double-check hotel or Airbnb reservations',
                    dueDate: '',
                    priority: 'medium',
                    completed: false,
                },
            ],
        },
    ],
};

/**
 * Adjusts the due dates of todos in the sample data to distribute them evenly across the current week.
 * Week starts with Monday.
 *
 * @param {Object} sampleData - The sample data object containing projects and todos.
 */
function adjustDueDatesForCurrentWeek(sampleData) {
    // Get the current date
    const currentDate = new Date();
    // Adjust to Monday it it's not already Monday
    const currentDayOfWeek = currentDate.getDay();
    if (currentDayOfWeek !== 1) {
        const difference = currentDayOfWeek - 1;
        currentDate.setDate(currentDate.getDate() - difference);
    }

    // Calculate the total number of days in the current week
    const totalDays = 7;

    // Distribute the todos evenly across the days of the week
    let currentDay = new Date(currentDate);
    sampleData.projects.forEach((project) => {
        const todos = project.todos;
        const todosPerDay = Math.ceil(todos.length / totalDays);
        let currentTodoIndex = 0;

        for (let i = 0; i < totalDays; i++) {
            const todosForCurrentDay = todos.slice(
                currentTodoIndex,
                currentTodoIndex + todosPerDay
            );
            const dueDate = new Date(currentDay);
            todosForCurrentDay.forEach((todo, index) => {
                // Calculate due date based on index to evenly distribute todos
                dueDate.setDate(currentDay.getDate() + index);
                todo.dueDate = dueDate.toISOString().split('T')[0];
            });

            currentTodoIndex += todosPerDay;
            // Increment the current day
            currentDay.setDate(currentDay.getDate() + 1);
        }
    });
}

// Call the function with the sampleData
adjustDueDatesForCurrentWeek(sampleData);
