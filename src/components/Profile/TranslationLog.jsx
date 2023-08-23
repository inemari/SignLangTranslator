import React from "react";
import TranslatedItem from "./TranslatedItem";

const TranslationLog = ({ translationContent }) => {
    const translationList = translationContent.map((translation, index) => (
        <TranslatedItem key={index} translation={translation} />
    ));

    return (
        <section>
            <h4>Your translation history</h4>
            <ul>{translationList}</ul>
        </section>
    );
};

export default TranslationLog;
