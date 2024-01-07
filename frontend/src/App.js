import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Banner from './components/Banner';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Banner/>
      <Routes>
        <Route path="/home" element={user ? <Home />: <Navigate to="/login"/>}/>
        <Route path="/login" element={!user ? <Login />: <Navigate to="/home" />}/>
        <Route path="/signup" element={!user ? <Signup />: <Navigate to="/home" />}/>
      </Routes>
    </div>
  );
}

export default App;