// Importing global, main, and dark mode CSS stylesheets
import './styles/global.css';
import './styles/main.css';
import './styles/dark.css';

// Importing functionality modules
import darkModeToggler from './modules/utility/darkMode.js';
import mobileNavigationToggling from './modules/utility/mobileNavigation.js';

// Import images
import logo from './assets/img/logo/todoOrNotLogo.png'

// Importing page loader functions
import homePageLoader from './modules/pageLoaders/homePageLoader.js';


// Activate dark mode toggle functionality
darkModeToggler();

// Set up mobile navigation toggle functionality
mobileNavigationToggling();

// Global variables setup
let pageNames = ['home', 'today', 'week', 'projects', 'notes'];
// let currentTab = pageNames[0];
let content = document.getElementById('content');

// Load the initial home page content
homePageLoader(content);
console.log('main container: ', content)

/**
 * Set up click event listeners for tab navigation in the header
 * This allows switching between different pages (home, menu, contacts) and
 * ensures the appropriate content is loaded and displayed
 */
// pageNames.forEach((pageNames) => {
//     const button = document.getElementById(pageNames);
//     button.addEventListener('click', () => {
//         if (button.id == 'home') {
//             homePageLoader(content);
//         } else if (button.id == 'today') {
//             menuPageLoader(content);
//         } else {
//             contactsPageLoader(content);
//         }
//         updateNavigationActiveState(pageNames);
//     });
// });

/**
 * Updates the active state of navigation buttons and removes active state in mobile navigation
 * @param {string} activeButtonId - The ID of the navigation button to be marked as active
 */
export function updateNavigationActiveState(activeButtonId) {
    // Navigation button IDs
    const navigationButtons = ['home', 'today', 'contacts'];

    // Selecting elements related to mobile navigation
    const body = document.querySelector('body');
    const navbarMenu = document.querySelector('#cs-navigation');
    const hamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

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
}
