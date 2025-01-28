import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword handleClose={() => { console.log('Forgot') }} open />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
};

export default App;
