import { createHeaders } from './index'
/**
 * user.js
 * 
 * This file provides functionalities to interact with the user API. 
 * It includes functions to check for the existence of a user, create a new user, 
 * and log in a user (with automatic user creation if the user doesn't exist).
 * 
 */



const apiUrl = process.env.REACT_APP_API_URL



/**
 * Checks if a user with the given username exists.
 */
const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, []]
    }
}


/**
 * Creates a new user with the given username.
 */
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
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, []]
    }
}


/*
 * Logs in a user. If the user doesn't exist, it creates a new user.
 */
export const loginUser = async (username) => {
    const [CheckError, user] = await checkForUser(username)
    if (CheckError !== null) {
        return [CheckError, null]
    }

    if (user.length > 0) {
        return [null, user.pop()]
    }

    return await createUser(username)
}

const getUserById = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`)
        if (!response.ok) {
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, null]
    }
}

//save the users tranlated words to the api
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
            throw new Error('Could not complete request.');
        }
        const data = await response.json();
        return [null, data];
    } catch (error) {
        return [error.message, null];
    }
};



export const getUserTranslations = async (userId) => {
    try {
        // First, get the current translations for the user
        const [errorGettingUser, existingUser] = await getUserById(userId);

        if (errorGettingUser) {
            throw new Error('Could not fetch user data.');
        }

        // Now, return the user's translations
        return [null, existingUser.translations]; // Return the translations directly
    } catch (error) {
        return [error.message, null];
    }
};

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

        if (!response.ok) {
            throw new Error('Could not complete request.');
        }

        const data = await response.json();
        return [null, data];
    } catch (error) {
        return [error.message, null];
    }
};


