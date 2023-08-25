import React from 'react';
import TranslationLog from '../components/Translation/TranslationLog';
import { useUser } from '../context/UserContext';
import withAuth from '../hoc/withAuth';
import '../styles/profile.css';


const Profile = () => {
    const { user } = useUser();

    return (
        <TranslationLog userId={user.id} />
    );
};

export default withAuth(Profile);
