
import {  Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login"; // Change to named import
import { Register } from "./pages/Register"; // Change to named import
import './index.css';
import { Landing } from './pages/Landing';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
