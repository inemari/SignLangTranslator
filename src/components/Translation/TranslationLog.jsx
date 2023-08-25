// Importing required modules and API function
import React, { useState, useEffect } from 'react';
import { getUserTranslations } from '../../api/user';

// Definition for displaying user's translation log
const TranslationLog = ({ userId }) => {
    const [translations, setTranslations] = useState([]); // State for user translations  
    const [translationsError, setTranslationsError] = useState(null); // Error handling

    // Fetch user translations when the component mounts or userId changes
    useEffect(() => {
        async function fetchUserTranslations() {
            const [error, userTranslations] = await getUserTranslations(userId); // Get user translations from the API
            if (error) {
                setTranslationsError(error); // Handle errors 
            } else {
                setTranslations(userTranslations); // Set translations
            }
        }

        fetchUserTranslations();
    }, [userId]); // Runs only when userId changes

    // Show only the last 10 translations
    const lastTenTranslations = translations.slice(-10);
    
    // Component JSX
    return (
        <div>
            {translationsError && <p>Error: {translationsError}</p>}
            <ol className="translation-list"> 
                {lastTenTranslations.map((translation, index) => (
                    <li key={index} className="translation-log-item">
                        {translation}
                    </li>
                ))}
            </ol>
        </div>
    );
};
export default TranslationLog; // Exporting the TranslationLog component as the default export