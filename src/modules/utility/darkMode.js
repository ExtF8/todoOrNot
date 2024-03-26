/**
 * Toggles dark mode for the application based on user preferences and button clicks.
 *
 * This function enables dark mode if the user has previously chosen it or if their browser
 * preferences indicate a preference for dark mode. It also allows users to toggle between
 * light and dark mode by clicking a button.
 */
export default function darkModeToggler() {
    // Helper functions to toggle dark mode
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }

    // Determines a new users dark mode preferences
    function detectColorScheme() {
        // Default to the light theme
        let theme = 'light';

        // Check localStorage for a saved 'theme' variable. if it's there, the user has visited before, so apply the necessary theme choices
        if (localStorage.getItem('theme')) {
            theme = localStorage.getItem('theme');
        }
        // If it's not there, check to see if the user has applied dark mode preferences themselves in the browser
        else if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            theme = 'dark';
        }

        // If there is no preference set, the default of light will be used. apply accordingly
        theme === 'dark' ? enableDarkMode() : disableDarkMode();
    }

    // Run on page load
    detectColorScheme();

    // Add event listener to the dark mode button toggle
    const darkModeButton = document.getElementById('dark-mode-toggle');
    darkModeButton.addEventListener('click', darkModeButtonHandler);

    // Handler function for the dark mode button click event
    function darkModeButtonHandler(event) {
        event.preventDefault();
        // Toggle between dark and light mode based on the current theme
        localStorage.getItem('theme') === 'light'
            ? enableDarkMode()
            : disableDarkMode();
    }
}
