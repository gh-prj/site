import React from 'react';
import { Route, Routes } from 'react-router-dom';
// const SideMenu = React.lazy(() => import('../pages/react/ReduxThunk/components/SideMenu'));
import SideMenu from '../pages/react/ReduxThunk/components/SideMenu';

const SidebarRoutes = () => {
    return (
        <Routes>
            <Route path="/site" element={<div>Home Page</div>} />
            <Route path="/site/testcontext" element={<div>TestContext</div>} />
            <Route path="/site/mobx/dondals" element={<div>McDondal&apos;s</div>} />
            <Route path="/site/usereducer" element={<div>useReducer</div>} />
            <Route path="/site/reduxthunk/users" element={<SideMenu active="users" />} />
            <Route path="/site/reduxthunk/todos" element={<SideMenu active="todos" />} />
            <Route path="/site/scene3D" element={<div>This page does not use JavaScript.</div>} />
            <Route path="/site/parallax" element={<div>Scroll down</div>} />
        </Routes>
    );
}

export default SidebarRoutes;
