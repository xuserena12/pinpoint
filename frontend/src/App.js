import './App.css';
import Home from './pages/Home';
import Banner from './components/Banner';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Banner/>
      <Routes>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
