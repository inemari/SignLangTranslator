
import TranslationLog from '../components/Translation/TranslationLog';
import withAuth from '../hoc/withAuth';

const Profile = ({ userId }) => {
    return (
        <div>
            <h1>Translation Page</h1>
            {/* You can include other components and logic here */}
            <TranslationLog userId={userId} />
        </div>
    );
};

export default withAuth(Profile);
