/* eslint no-unused-vars: "off" */
import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import wait from '../../pages/utils/wait';
const PageOne = React.lazy(() => {
    return import('../../pages/PageOne/PageOne')
});
const PageTwo = React.lazy(() => import('../../pages/PageTwo/PageTwo'))
import TopMenu from '../TopMenu/TopMenu';
import cl from './Layout.module.scss'

const Layout = () => {
    return (
        <Router>
            <div className={cl.app}>
                <nav className={cl.navbar}>
                    {/* <Link to="/site/one" style={{ padding: 5 }}>
                        One
                    </Link>
                    <Link to="/site/two" style={{ padding: 5 }}>
                        Two
                    </Link> */}
                    <TopMenu />
                </nav>
                <div className={cl.sidebar}>sidebar</div>
                <main className={cl.content}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/site" element={<div>Home</div>} />
                            <Route path="/site/one" element={<PageOne />} />
                            <Route path="/site/two" element={<PageTwo />} />
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

