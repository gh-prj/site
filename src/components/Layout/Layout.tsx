/* eslint no-unused-vars: "off" */
import React, { Suspense } from 'react';
import {
    BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom'
const UseCallback = React.lazy(() => import('../../pages/react/hooks/useCallback/UseCallback'));
const PageOne = React.lazy(() => import('../../pages/PageOne/PageOne'));
const PageTwo = React.lazy(() => import('../../pages/PageTwo/PageTwo'))
const UseState = React.lazy(() => import('../../pages/react/hooks/useState/UseState'))
const UseRef = React.lazy(() => import('../../pages/react/hooks/useRef/UseRef'))
const UseEffect = React.lazy(() => import('../../pages/react/hooks/useEffect/UseEffect'))
const UseContext = React.lazy(() => import('../../pages/react/hooks/useContext/UseContext'))
const Test = React.lazy(() => import('../../pages/Test/Test'))

import TopMenu from '../TopMenu/TopMenu';
import cl from './Layout.module.scss'

const Layout = () => {
    return (
        <Router>
            <div className={cl.app}>
                <nav className={cl.navbar}>
                    <TopMenu />
                </nav>
                <div className={cl.sidebar}>sidebar</div>
                <main className={cl.content}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/site" element={<div>Home</div>} />
                            <Route path="/site/one" element={<PageOne />} />
                            <Route path="/site/two" element={<PageTwo />} />
                            <Route path="/site/usestate" element={<UseState />} />
                            <Route path="/site/usecallback" element={<UseCallback />} />
                            <Route path="/site/test" element={<Test />} />
                            <Route path="/site/useref" element={<UseRef />} />
                            <Route path="/site/useeffect" element={<UseEffect />} />
                            <Route path="/site/usecontext" element={<UseContext />} />
                        </Routes>
                    </Suspense>
                </main>
                <footer className={cl.footer}>footer</footer>
            </div>
        </Router>

    );
}

export default Layout;

function One() {
    return <div>One</div>
}

function Two() {
    return <div>Two</div>
}

