import React from 'react';
import { Route, Routes } from 'react-router-dom';
// const SideMenu = React.lazy(() => import('../pages/react/ReduxThunk/components/SideMenu'));
import SideMenu from '../pages/react/ReduxThunk/components/SideMenu';

const SidebarRoutes = () => {
    return (
        <Routes>
            <Route path="/site/usereducer" element={<div>useReducer</div>} />
            <Route path="/site/reduxthunk/users" element={<SideMenu active="users" />} />
            <Route path="/site/reduxthunk/todos" element={<SideMenu active="todos" />} />
            <Route path="/site/scene3D" element={<div>This page does not use JavaScript.</div>} />
        </Routes>
    );
}

export default SidebarRoutes;
