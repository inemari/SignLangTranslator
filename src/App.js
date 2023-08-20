
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './views/Login';
import Translator from './views/Translator';
import Profile from './views/Profile';
import CustomNavbar from './components/Navbar/CustomNavbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Translator' element={<Translator />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </div></BrowserRouter>
  );
}

export default App;
