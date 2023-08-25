// Necessary React hooks and dependencies
import React, { useState, useEffect } from 'react';

// API functions for fetching and clearing user translations
import { getUserTranslations, clearUserTranslations } from '../../api/user';

// Global stylesheet
import '../../App.css';

// Context import to access and manage current user details
import { useUser } from '../../context/UserContext';

const TranslationLog = ({ userId }) => {
    // State to hold the list of translations
    const [translations, setTranslations] = useState([]);

    // State to handle any errors during translations fetch
    const [translationsError, setTranslationsError] = useState(null);

    // useEffect hook to fetch user translations when the component mounts
    useEffect(() => {
        const fetchUserTranslations = async () => {
            try {
                const [error, userTranslations] = await getUserTranslations(userId);
                if (error) throw error;

                // Set the fetched translations in state
                setTranslations(userTranslations);
            } catch (error) {
                // Handle errors during translation fetching
                setTranslationsError(error);
            }
        };

        fetchUserTranslations();
    }, [userId]); // Dependency on userId ensures re-fetching when userId changes

    // Accessing the user context to get the current user details and the setUser function
    const { user, setUser } = useUser();

    // Handler to clear user translations
    const handleClearTranslations = async () => {
        const [error, updatedUser] = await clearUserTranslations(user.id);
        if (error) {
            console.error("Failed to clear translations:", error);
            return;
        }

        // Update the user context with the new data
        setUser(updatedUser);

        // Refresh the page to reflect the cleared translations in the UI
        window.location.reload();
    };

    // Getting the last 10 translations from the translations array
    const lastTenTranslations = translations.slice(-10);

    return (
        <div className="content-box" >
            <h1>Your translations</h1>
            <ol className="translation-list">
                <h4>Your last 10 translations:</h4>
                {lastTenTranslations.map((translation, index) => (
                    <li key={index} className="translation-log-item">
                        {translation}
                        {translationsError && <p>Error: {translationsError}</p>}
                    </li>
                ))}
                <button className="clear-button" onClick={handleClearTranslations}>Clear Translations</button>
            </ol>
        </div>
    );
};

export default TranslationLog;
