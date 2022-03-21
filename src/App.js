/* eslint-disable no-undef */
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import Single from './views/Single';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/single" element={<Single />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
