// Importing required modules, data, and hooks
import React, { useState } from 'react';
import letterTranslations from '../../data/letterTranslations';
import { useUser } from '../../context/UserContext';
import { addUserTranslation } from '../../api/user';

// Definition for translation functionality 
const Translate = () => {
    // Local state for input text and images displaying 
    const [inputText, setInputText] = useState('');
    const [displayedImages, setDisplayedImages] = useState([]);
    const { user, setUser } = useUser(); // Accessing user data and setter function from context
    
    // Event handler for input text changes
    const handleKeyInput = (e) => { setInputText(e.target.value); }; 
    
    // Event handler for translate button "click"
    const handleTranslateClick = async () => {
        // Add the translation to user's translations in the backend
        const [error, updatedUser] = await addUserTranslation(user.id, inputText);
        if (error) {
            console.error("Failed to add translation:", error);
            return;
        }

        // Update the user data in the context
        setUser(updatedUser);
        
        // Generate an array of image URLs based on the input text
        const images = inputText.split('').map((letter) => {
            const translation = letterTranslations.find((item) => item.name === letter.toLowerCase());
            return translation ? translation.image : null;
        }).filter(Boolean);

        setDisplayedImages(images); // Set the displayed images state
    };
    
    // Component JSX
    return (
        <div className="input-box">
            {/* Input Text Box */}
            <h2>What would you like to translate?</h2>
            <div className='input-field'>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleKeyInput}
                    placeholder="Type text to translate..."
                />
                <button onClick={handleTranslateClick} className='input-button'>
                    Translate
                </button>
            </div>

            {/* Images */}
            <div className="sign-container">
                {
                    displayedImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt="Signsymbol"
                            style={{ maxWidth: "100px", marginRight: "10px", marginBottom: "10px" }}
                        />
                    ))
                }
            </div>
        </div >)
}
export default Translate; // Exporting the Translate component as the default export