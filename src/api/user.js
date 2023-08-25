// Import the createHeaders function from the 'index' module
import { createHeaders } from './index'

/*
 * This file provides functionalities to interact with the user API. 
 * It includes functions to check for the existence of a user, create a new user, 
 * and log in a user (with automatic user creation if the user doesn't exist).
 */

// Retrieve the API URL from environment variables
const apiUrl = process.env.REACT_APP_API_URL

// Checks if a user with the given username exists
const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error('Could not complete request.') // Throws error if the response is not successful
        }
        const data = await response.json() // Parse the response data as JSON
        return [null, data] // Return an array with null as the first element, and data as the second
    } catch (error) {
        return [error.message, []]
    }
}

// Creates a new user with the given username
const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not complete request.') // Throws error if the response is not successful
        }
        const data = await response.json() // Parse the response data as JSON
        return [null, data] // Return an array with null as the first element, and data as the second
    } catch (error) {
        return [error.message, []]
    }
}

// Logs in a user. If the user doesn't exist, it creates a new user
export const loginUser = async (username) => {
    const [CheckError, user] = await checkForUser(username) // Call checkForUser to see if the user exists
    if (CheckError !== null) { 
        return [CheckError, null] // Returns arrray with error message and null user data
    }

    if (user.length > 0) { // Continues if user data is returned
        return [null, user.pop()] // Remove and return hte last element of the user array
    }
    
    return await createUser(username) // Creates a new user if the user doesn't already exist
}

// Retrieves user data by their ID
const getUserById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`)
        if (!response.ok) {
            throw new Error('Could not complete request.')  // Throws error if the response is not successful
        }
        const data = await response.json() // Parse the response data as JSON
        return [null, data] // Return an array with null as the first element, and data as the second
    } catch (error) {
        return [error.message, null]
    }
}

// Save the users tranlated words to the api
export const addUserTranslation = async (userId, translation) => {
    try {
        // First, get the current translations for the user
        const [errorGettingUser, existingUser] = await getUserById(userId);

        if (errorGettingUser) {
            throw new Error('Could not fetch user data.');
        }

        // Append the new translation to the existing translations
        const updatedTranslations = [...existingUser.translations, translation];

        // Now, send a patch request with the updated translations
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: updatedTranslations
            })
        });
        if (!response.ok) {
            throw new Error('Could not complete request.'); // Throws error if the response is not successful
        }
        const data = await response.json(); // Parse the response data as JSON
        return [null, data]; // Return an array with null as the first element, and data as the second
    } catch (error) {
        return [error.message, null];
    }
};

// Retrieves a user's translations by their ID
export const getUserTranslations = async (userId) => {
    try {
        // First, get the current translations for the user
        const [errorGettingUser, existingUser] = await getUserById(userId);

        if (errorGettingUser) { // Checks if there's an error while fetching
            throw new Error('Could not fetch user data.'); // If error, throws an error with a message
        }

        // Now, return the user's translations
        return [null, existingUser.translations]; // Return the translations directly
    } catch (error) {
        return [error.message, null];
    }
};

// Clears a user's translations
export const clearUserTranslations = async (userId) => {
    try {
        // Send a patch request to clear the user's translations
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        });

        if (!response.ok) { // Checks if the response indicates a successful operation
            throw new Error('Could not complete request.'); // If not, throw an error
        }

        const data = await response.json(); // Parse the response data as JSON
        return [null, data]; // Return an array with null as the first element, and data as the second
    } catch (error) {
        return [error.message, null]; 
    }
};