import React from 'react';
import TranslationLog from '../components/Translation/TranslationLog';
import withAuth from '../hoc/withAuth';
import { useUser } from '../context/UserContext';
import { clearUserTranslations } from '../api/user';
import '../styles/profile.css';

const Profile = () => {
    const { user, setUser } = useUser();

    const handleClearTranslations = async () => {
        // Call the API function to clear translations
        const [error, updatedUser] = await clearUserTranslations(user.id);
        if (error) {
            console.error("Failed to clear translations:", error);
            return;
        }

        // Update the user data in the context
        setUser(updatedUser);

        // Refresh the page to update the UI
        window.location.reload();
    };

    return (
        <div className="profile-container">
            <div className="inner-white-box">
                <h1 className="profile-title" style={{ fontFamily: "Figma Hand, cursive" }}>Your Translation History</h1>
                <h3 style={{ fontFamily: "Figma Hand, cursive" }}>Your last 10 translations:</h3>
                <button className="clear-button" onClick={handleClearTranslations}>Clear Translations</button>
                <TranslationLog userId={user.id} />
            </div>
        </div>
    );
};

export default withAuth(Profile);
