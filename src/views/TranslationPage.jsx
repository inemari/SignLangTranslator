import Translate from '../components/Translation/Translate';
import withAuth from '../hoc/withAuth';

const TranslationPage = () => {
    return (
        <div className="translator-container">
            <h1>Write text to be translated</h1>
            <Translate />
        </div>
    );
}

export default withAuth(TranslationPage);