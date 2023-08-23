
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Profile = () => {
    const { user } = useUser();

    return (
        <>
            <h1>Profile</h1>

        </>
    );
};
export default withAuth(Profile);

