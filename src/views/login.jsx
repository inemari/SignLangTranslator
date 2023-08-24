import LoginForm from '../components/Login/LoginForm.jsx';
import '../styles/login.css'

const Login = () => {
    return (
        <div className='login-background'>
            <div className="login-field">
                <LoginForm />
            </div>
        </div>);
}

export default Login;