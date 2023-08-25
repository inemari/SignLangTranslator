import React, { useState } from 'react';
import letterTranslations from '../../data/letterTranslations';
import { useUser } from '../../context/UserContext';
import { addUserTranslation } from '../../api/user';


const Translate = () => {
    const [inputText, setInputText] = useState('');
    const [displayedImages, setDisplayedImages] = useState([]);
    const { user, setUser } = useUser();

    const handleKeyInput = (e) => { setInputText(e.target.value); };

    const handleTranslateClick = async () => {
        // Add the translation to user's translations in the backend
        const [error, updatedUser] = await addUserTranslation(user.id, inputText);
        if (error) {
            console.error("Failed to add translation:", error);
            return;
        }

        // Update the user data in the context
        setUser(updatedUser);

        const images = inputText.split('').map((letter) => {
            const translation = letterTranslations.find((item) => item.name === letter.toLowerCase());
            return translation ? translation.image : null;
        }).filter(Boolean);

        setDisplayedImages(images);
    };

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
            <div style={{
                background: "white",
                borderRadius: "inherit",
                marginTop: "2rem"
            }}>
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

export default Translate;