/**
 * @file This file is the entry point of the application and
 * contains the main logic for loading different pages and handling navigation.
 * It imports CSS stylesheets, functionality modules, and images.
 * It also sets up event listeners for tab navigation, for the "New Todo" button and
 * updates the active state of navigation buttons.
 * @module index
 */
// Importing global, main, and dark mode CSS stylesheets
import './styles/global.css';
import './styles/main.css';
import './styles/dark.css';

// Importing functionality modules
import darkModeToggler from './modules/utility/darkMode.js';
import mobileNavigationToggling from './modules/utility/mobileNavigation.js';
import { dialogHandler } from './modules/utility/dialogHandler.js';
import { handleDialogError } from './modules/utility/todoRenderer.js';

// Import images
import logo from './assets/img/logo/todoOrNotLogo.png';

// Importing page loader functions
import homePageLoader from './modules/pageLoaders/homePageLoader.js';
import todayPageLoader from './modules/pageLoaders/todayPageLoader.js';
import weekPageLoader from './modules/pageLoaders/weekPageLoader.js';
import projectsPageLoader from './modules/pageLoaders/projectsPageLoader.js';

// Global variables setup
// Navigation button IDs
const navigationButtons = ['home', 'today', 'week', 'projects'];
const newTodoButton = document.getElementById('newTodoButton');
const content = document.getElementById('content');

// Activate dark mode toggle functionality
darkModeToggler();

// Set up mobile navigation toggle functionality
mobileNavigationToggling();

// Load the initial home page content
homePageLoader(content);

/**
 * Set up click event listeners for tab navigation in the header.
 * This allows switching between different pages
 * (home, todos for today, todos for this week, projects) and
 * ensures the appropriate content is loaded and displayed.
 */
try {
    navigationButtons.forEach((navigationButtons) => {
        const button = document.getElementById(navigationButtons);

        button.addEventListener('click', () => {
            switch (navigationButtons) {
                case 'home':
                    homePageLoader(content);
                    break;
                case 'today':
                    todayPageLoader(content);
                    break;
                case 'week':
                    weekPageLoader(content);
                    break;
                case 'projects':
                    projectsPageLoader(content);
                    break;
                default:
                    homePageLoader(content); // Default page if page is not specified
            }
            updateNavigationActiveState(navigationButtons);
        });
    });
} catch (error) {
    console.error(
        'Error setting up event listeners for tab navigation: ',
        error
    );
}

/**
 * Handles the click event for the "New Todo" button and opens a dialog.
 */
try {
    newTodoButton.addEventListener('click', async () => {
        await dialogHandler(newTodoButton, 'newTodoButton');
    });
} catch (error) {
    handleDialogError(error);
}

/**
 * Updates the active state of navigation buttons and removes active state in mobile navigation.
 *
 * @param {string} activeButtonId - The ID of the navigation button to be marked as active.
 */
export function updateNavigationActiveState(activeButtonId) {
    // Selecting elements related to mobile navigation
    const body = document.querySelector('body');
    const navbarMenu = document.querySelector('#cs-navigation');
    const hamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

    try {
        navigationButtons.forEach((buttonId) => {
            const buttonElement = document.getElementById(buttonId);
            if (buttonElement) {
                if (buttonId === activeButtonId) {
                    buttonElement.classList.add('cs-active');

                    // Close mobile navigation menu when a navigation button is activated
                    hamburgerMenu.classList.remove('cs-active');
                    navbarMenu.classList.remove('cs-active');
                    body.classList.remove('cs-open');
                } else {
                    buttonElement.classList.remove('cs-active');
                }
            }
        });
    } catch (error) {
        console.error('Error updating navigation state: ', error);
    }
}
