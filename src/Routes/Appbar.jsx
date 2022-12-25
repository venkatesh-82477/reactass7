import React from 'react';
import { Routes, Route } from "react-router-dom";
import Add from '../pages/Add';
import Contact from '../pages/Contact';
import Edit from '../pages/Edit';
import Home from '../pages/Home';
import Students from '../pages/Students';

const Appbar = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Students" element={<Students />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Students/Add" element={<Add />} />
                <Route path="Students/Edit" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default Appbar;