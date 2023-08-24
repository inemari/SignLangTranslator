import React, { useState, useEffect } from 'react';
import { getUserTranslations } from '../../api/user';

const TranslationLog = ({ userId }) => {
    const [translations, setTranslations] = useState([]);
    const [translationsError, setTranslationsError] = useState(null);

    useEffect(() => {
        async function fetchUserTranslations() {
            const [error, userTranslations] = await getUserTranslations(userId);

            if (error) {
                setTranslationsError(error);
            } else {
                setTranslations(userTranslations);
            }
        }

        fetchUserTranslations();
    }, [userId]);

    // Show only the last 10 translations
    const lastTenTranslations = translations.slice(-10);

    return (
        <div>
            {translationsError && <p>Error: {translationsError}</p>}
            <ul>
                {lastTenTranslations.map((translation, index) => (
                    <li key={index}>{translation}</li>
                ))}
            </ul>
        </div>
    );
};


export default TranslationLog;