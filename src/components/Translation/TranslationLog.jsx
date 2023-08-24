import React, { useState, useEffect } from 'react';
import { getUserTranslations } from '../../api/user';


const TranslationLog = ({ userId }) => {
    const [translations, setTranslations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            const [err, userTranslations] = await getUserTranslations(userId);
            if (err) {
                setError(err);
                setTranslations([]);
            } else {
                setError(null);
                setTranslations(userTranslations);
            }
        })();
    }, [userId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Translation Log</h2>
            <ul>
                {translations.map((translation, index) => (
                    <li key={index}>{translation}</li>
                ))}
            </ul>
        </div>
    );
};

export default TranslationLog;
