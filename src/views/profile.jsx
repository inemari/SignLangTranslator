import ProfileActions from "../components/Profile/ProfileAction";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileSignHistory from "../components/Profile/ProfileSignHistory"; 
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Profile = () => {
    const { user } = useUser();

    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={user.username} />
            <ProfileActions />
            <ProfileSignHistory translationContent={user.signs} /> 
        </>
    );
};
export default withAuth(Profile);

