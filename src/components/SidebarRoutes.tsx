import React from 'react';
import { Route, Routes } from 'react-router-dom';

const SidebarRoutes = () => {
    return (
        <Routes>
            <Route path="/site/one" element={<div>Page One</div>} />
            <Route path="/site/usereducer" element={<div>useReducer</div>} />
        </Routes>
    );
}

export default SidebarRoutes;
