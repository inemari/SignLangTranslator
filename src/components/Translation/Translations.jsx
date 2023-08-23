import React, { useState } from 'react';
import letterTranslations from '../../data/letterTranslations';



const Translate = () => {
    const [inputText, setInputText] = useState('');
    const [displayedImages, setDisplayedImages] = useState([]);

    const handleKeyInput = (e) => {
        setInputText(e.target.value);
    };

    const handleTranslateClick = () => {
        const images = inputText.split('').map((letter) => {
            const translation = letterTranslations.find((item) => item.name === letter.toLowerCase());
            return translation ? translation.image : null;
        }).filter(Boolean);

        setDisplayedImages(images);
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={handleKeyInput}
                placeholder="Type a letter..."
            />
            <button onClick={handleTranslateClick}>Translate</button>
            <div>
                {displayedImages.map((image, index) => (
                    <img key={index} src={image} alt="" />
                ))}
            </div>
        </div>
    );
};

export default Translate;
