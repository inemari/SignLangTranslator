import Translate from '../components/Translation/Translate';
import withAuth from '../hoc/withAuth';

const TranslationPage = () => {
    return (
        <div className="translator-container">
            <Translate />
        </div>
    );
}

export default withAuth(TranslationPage);