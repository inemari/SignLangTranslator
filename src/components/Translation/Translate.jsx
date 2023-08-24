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


    /* const handleTranslateClick = translation => {
        translationAdd(user, inputText);
        const images = inputText.split('').map((letter) => {
            const translation = letterTranslations.find((item) => item.name === letter.toLowerCase());

            return translation ? translation.image : null;
        }).filter(Boolean);

        setDisplayedImages(images);

    };*/
    return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh" }}>
        {/* Input Text Box */}
        <div style={{ display: "flex", alignItems: "center", backgroundColor: "gray", padding: "10px", borderRadius: "4px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", width: "70%", maxWidth: "800px", marginTop: "2%", marginBottom: "20px" }}>
            <input
                type="text"
                value={inputText}
                onChange={handleKeyInput}
                placeholder="Type text to translate..."
                style={{ flex: "1", padding: "10px", border: "1px solid rgb(204, 204, 204)", borderRadius: "4px", backgroundColor: "white" }}
            />
            <button
                onClick={handleTranslateClick}
                style={{ padding: "10px 20px", backgroundColor: "#7494ea", color: "rgb(255, 255, 255)", border: "initial", borderRadius: "4px", cursor: "pointer", marginLeft: "10px" }}
            >
                Translate
            </button>
        </div>
        
        {/* Main Container */}
        <div style={{ backgroundColor: "rgb(247, 247, 250)", padding: "30px", borderRadius: "4px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", width: "70%", maxWidth: "800px" }}>
            {/* Images */}
            <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {displayedImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt=""
                        style={{ maxWidth: "100px", marginRight: "10px", marginBottom: "10px" }}
                    />
                ))}
            </div>
            
            {/* Sign Language */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                {/* Your sign language elements here */}
            </div>
        </div>
    </div>
);

};

export default Translate;