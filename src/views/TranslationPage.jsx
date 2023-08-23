import Translator from '../components/Translation/Translator';
import withAuth from '../hoc/withAuth';

const TranslationPage = () => {
    return (
        <div className="translator-container">
            <h1>Write text to be translated</h1>
            <Translator />
        </div>
    );
}

export default withAuth(TranslationPage);