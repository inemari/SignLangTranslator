export const storageSave = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    // Stores the provided 'value' under the specified 'key' in local storage.
    // The value is first converted to a JSON string for consistency.
}

// Function to read data from local storage using a specified key
export const storageRead = key => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
        // Parse stored JSON string to original format and return it.
    }


    // Return null if no data exists for the given 'key'.
    return null 
}