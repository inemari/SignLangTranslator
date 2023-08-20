
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>{
        /* 
          <Route path='/' element={<Login/>}/>
          <Route path='/Translator' element={<Translator/>}/>
          <Route path='/Profile' element={<Profile/>}/> 
          */}
        </Routes>
      </div></BrowserRouter>
  );
}

export default App;
