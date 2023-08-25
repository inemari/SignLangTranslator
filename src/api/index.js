// Retrieve the API key from environment variables
const apiKey = process.env.REACT_APP_API_KEY

/*  
    Function that generates and returns an object containing HTTP headers, 
    including a content type set to JSON and an API key retrieved
    from an env
*/
export const createHeaders = () => {
    // Return an object with the required headers
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}