import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/CustomNavbar';

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <CustomNavbar />
    </div>
  );
}

export default App;
