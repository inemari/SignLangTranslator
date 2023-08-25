import React, { useState, useEffect } from 'react';
import { getUserTranslations, clearUserTranslations } from '../../api/user';
import '../../App.css';
import { useUser } from '../../context/UserContext';

const TranslationLog = ({ userId }) => {
    const [translations, setTranslations] = useState([]);
    const [translationsError, setTranslationsError] = useState(null);

    useEffect(() => {
        const fetchUserTranslations = async () => {
            try {
                const [error, userTranslations] = await getUserTranslations(userId);
                if (error) throw error;

                setTranslations(userTranslations);
            } catch (error) {
                setTranslationsError(error);
            }
        };

        fetchUserTranslations();
    }, [userId]);

    const { user, setUser } = useUser();



    const handleClearTranslations = async () => {

        // Call the API function to clear translations

        const [error, updatedUser] = await clearUserTranslations(user.id);

        if (error) {

            console.error("Failed to clear translations:", error);

            return;

        }



        // Update the user data in the context

        setUser(updatedUser);



        // Refresh the page to update the UI

        window.location.reload();

    };

    const lastTenTranslations = translations.slice(-10);

    return (
        <div className="content-box">
            <h1>Your translations</h1>

            <ol className="translation-list"><h4>Your last 10 translations:</h4>

                {lastTenTranslations.map((translation, index) => (
                    <li key={index} className="translation-log-item">
                        {translation} {translationsError && <p>Error: {translationsError}</p>}
                    </li>
                ))}<button className="clear-button" onClick={handleClearTranslations}>Clear Translations</button>
            </ol>
        </div>


    );
};

export default TranslationLog;
