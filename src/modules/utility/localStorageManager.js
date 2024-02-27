// Function to save data to local storage
export function saveDataToLocalStorage(key, data) {
    return new Promise((resolve, reject) => {
        try {
            const serializedData = JSON.stringify(data);
            localStorage.setItem(key, serializedData);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

// Function to retrieve data from local storage
export function getDataFromLocalStorage(key) {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) {
            return null;
        }
        return JSON.parse(serializedData);
    } catch (error) {
        console.error('Error retrieving data from local storage: ', error);
        return null;
    }
}

// Function to remove data from local storage
export function removeDataFromStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing data from local storage: ', error);
        return false;
    }
}

// Function to edit data in local storage
export function editDataInLocalStorage(key, newData) {
    try {
        // Get existing data from local storage
        const existingData = getDataFromLocalStorage(key);

        if (existingData === null) {
            console.error(
                'Cannot edit data: No existing data found in local storage.'
            );
            return false;
        }

        // Merge existing data with new data
        const updateData = { ...existingData, ...newData };

        // Save updated data back to local storage
        return saveDataToLocalStorage(key, updateData);
    } catch (error) {
        console.error('Error editing data in local storage: ', error);
        return false;
    }
}
