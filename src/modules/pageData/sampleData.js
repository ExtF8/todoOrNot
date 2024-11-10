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
 * The week starts on Monday.
 *
 * @param {Object} sampleData - The sample data object containing projects and todos.
 */
function adjustDueDatesToIncludeCurrentDay(sampleData) {
    // Get the current date and set the time to the start of the day
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Set up the total number of days in the current week and next week (14 days)
    const totalDays = 14;

    // Iterate over projects and assign some Todos to the current day,
    // then distribute the rest over the next 13 days.
    let currentDay = new Date(currentDate);
    sampleData.projects.forEach(project => {
        const todos = project.todos;
        const totalTodos = todos.length;

        // Assign some todos to the current day
        const todosForToday = Math.min(3, totalTodos);
        for (let i = 0; i < todosForToday; i++) {
            todos[i].dueDate = currentDate.toISOString().split('T')[0];
        }

        // Distribute the remaining todos over the next 13 days
        let currentTodoIndex = todosForToday;
        for (let i = 1; i < totalDays; i++) {
            // Stop if all Todos are assigned
            if (currentTodoIndex >= totalTodos) break;

            // Create a new date for dueDate to avoid reference issues
            const dueDate = new Date(currentDay);
            todos[currentTodoIndex].dueDate = dueDate.toISOString().split('T')[0];
            currentTodoIndex++;

            // Increment the current day by 1 for the next iteration
            currentDay.setDate(currentDay.getDate() + 1);
        }
    });
}

// Call the function with the sampleData
adjustDueDatesToIncludeCurrentDay(sampleData);
