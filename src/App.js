
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './views/Login';
import TranslationPage from './views/TranslationPage';
import Profile from './views/Profile';
import CustomNavbar from './components/Navbar/CustomNavbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <div class="content-wrapper">
          <div className='half-bg'>
          </div>

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/TranslationPage' element={<TranslationPage />} />
            <Route path='/Profile' element={<Profile />} />
          </Routes></div>
      </div></BrowserRouter>
  );
}

export default App;
