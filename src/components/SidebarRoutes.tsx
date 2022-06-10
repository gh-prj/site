import React from 'react';
import { Route, Routes } from 'react-router-dom';
const SideMenu = React.lazy(() => import('../pages/react/Redux/components/SideMenu'));

const SidebarRoutes = () => {
    return (
        <Routes>
            <Route path="/site/one" element={<div>Page One</div>} />
            <Route path="/site/usereducer" element={<div>useReducer</div>} />
            <Route path="/site/redux/users" element={<SideMenu active={"users"} />} />
            <Route path="/site/redux/todos" element={<SideMenu active="todos" />} />
        </Routes>
    );
}

export default SidebarRoutes;
