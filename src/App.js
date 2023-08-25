// Import necessary modules and components
import './App.css'; 
import {
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom'; 
import Login from './views/Login'; 
import TranslationPage from './views/TranslationPage'; 
import Profile from './views/Profile'; 
import CustomNavbar from './components/Navbar/CustomNavbar'; 

function App() {
  return (
    // Using BrowserRouter to wrap the entire app and enable routing
    <BrowserRouter>
      <div className="App">
        {/* Rendering the custom navigation bar */}
        <CustomNavbar />
        <div class="content-wrapper"> {/* Note: class should be className */}
          <div className='half-bg'>
            {/* This div may contain some background-related content */}
          </div>

          <Routes>
            {/* Defining routes using the Routes component */}
            <Route path='/' element={<Login />} /> {/* Route for the Login view */}
            <Route path='/TranslationPage' element={<TranslationPage />} /> {/* Route for the TranslationPage view */}
            <Route path='/Profile' element={<Profile />} /> {/* Route for the Profile view */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App; // Exporting the App component as the default export
