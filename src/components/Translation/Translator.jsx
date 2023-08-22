import React, { useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL
const Translator = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText }),
            });

            if (response.ok) {
                const data = await response.json();
                setTranslatedText(data.translatedText);
            } else {
                console.error('Translation API Error');
            }
        } catch (error) {
            console.error('Translation API Error:', error);
        }
    };

    return (
        <div>
            <h1>Translator</h1>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text..."
                maxLength={40}
            />
            <button onClick={handleTranslate}>Translate</button>
            <div>
                <h2>Translated Text</h2>
                <p>{translatedText}</p>
            </div>
        </div>
    );
};

export default Translator;
