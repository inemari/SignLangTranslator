import React from 'react';
import TranslationLog from '../components/Translation/TranslationLog';
import withAuth from '../hoc/withAuth';
import { useUser } from '../context/UserContext';
import { clearUserTranslations } from '../api/user';

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
        <div>
            <h1>Profile</h1>
            <button onClick={handleClearTranslations}>Clear Translations</button>
            <TranslationLog userId={user.id} />
        </div>
    );
};

export default withAuth(Profile);



