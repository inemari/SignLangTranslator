import ProfileSignHistoryItem from "./TranslatedItem";

const ProfileSignHistory = ({ translationContent }) => {
    const translationList = translationContent.map(
        (translation, index) => <ProfileSignHistoryItem key={index + '-' + translation} translation={translation} />
    );

    return (
        <section>
            <h4>Your translation history</h4>
            <ul>{translationList}</ul>
        </section>
    );
};
export default ProfileSignHistory;
