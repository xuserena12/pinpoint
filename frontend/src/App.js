import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Banner from './components/Banner';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Banner/>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
