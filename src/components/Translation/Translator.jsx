import React, { useState } from 'react';
import "../../styles/translation.css";
// State management for input text and translated text

const apiUrl = process.env.REACT_APP_API_URL; 
const Translator = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

      // Function to handle translation
    const handleTranslate = async () => {
     
        
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText }),
            });


             // Checking if the API request was successful
            if (response.ok) {
                const data = await response.json();
                setTranslatedText(data.translatedText);

            } else {
                //If not succesfull it will logg an error message
                console.error('Translation API Error');
            }
        } catch (error) {
            console.error('Translation API Error:', error);
        }
    };

    return (
        <div className="translator-container">
            <div className="input-section">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter text..."
                    maxLength={40}
                />
                <button onClick={handleTranslate}>Translate</button>
            </div>
            <div className="translated-text-section">
                <h2>Translated Text</h2>
                <p>{translatedText}</p>
            </div>
        </div>
    );
};

export default Translator;
