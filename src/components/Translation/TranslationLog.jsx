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
        <div className="translation-log-container">
            {translationsError && <p>Error: {translationsError}</p>}
            <ol className="translation-list"> {/* Use "ol" for ordered list */}
                {lastTenTranslations.map((translation, index) => (
                    <li key={index} className="translation-log-item">
                        {translation}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TranslationLog;