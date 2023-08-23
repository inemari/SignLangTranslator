/**
 * user.js
 * 
 * This file provides functionalities to interact with the user API. 
 * It includes functions to check for the existence of a user, create a new user, 
 * and log in a user (with automatic user creation if the user doesn't exist).
 * 
 */

import { createHeaders } from './index'

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