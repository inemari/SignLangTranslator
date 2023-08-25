import Translate from '../components/Translation/Translate';
import withAuth from '../hoc/withAuth';
import '../App.css'

const TranslationPage = () => {
    return (
        <Translate />
    );
}


export default withAuth(TranslationPage);