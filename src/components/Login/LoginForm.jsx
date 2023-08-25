// Importing required modules and components 
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import '../../App.css';

// Validation cinfugrationg for the username
const usernameConfig = {
    required: true,
    minLength: 3 // Needs to have 3 or equal to 3 characters.
}

// Definiton for the login form
const LoginForm = () => {
    // Hooks Form setup
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser() //Accessing user data and setter function
    const navigate = useNavigate() // Navigation function 

    // Local State - loading API error
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null)

    // Side Effects - Redirect to TranslationPage if the user is already logged out
    useEffect(() => {
        if (user !== null) {
            navigate('TranslationPage')
        }
    }, [user, navigate])  // Empty Deps - Only run once

    // Event Handlers
    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username)
        if (error !== null) {
            setApiError(error) // Handling API error
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse) // Handling successful login response
        }
        setLoading(false);
    }

    // Render Functions - dispalying error messages
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>Username is too short (atleast 3 characters)</span>
        }
    })()
    
    // Componenet JSX
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <fieldset className='input-box'>
                    <h2>Enter username</h2>
                    <div className='input-field'>
                        <input type="text" placeholder="What's your name?"  {...register("username", usernameConfig)} />
                        <button type="submit" disabled={loading} className='input-button'>Login</button>
                    </div>
                    {errorMessage}
                </fieldset>

                {loading && <p>Logging in</p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}
export default LoginForm // Exporting the LoginForm coponenet as the default export