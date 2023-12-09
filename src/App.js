import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Privateroute from './route/Privateroute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/' element={<Privateroute />} >
        <Route path='home' element={<Home />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
