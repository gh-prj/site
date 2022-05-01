/* eslint no-unused-vars: "off" */
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import cl from './Layout.module.scss'

const Layout = () => {
    return (
        <Router>
            <div className={cl.app}>
                <nav className={cl.navbar}>
                    <Link to="/site/one" style={{ padding: 5 }}>
                        One
                    </Link>
                    <Link to="/site/two" style={{ padding: 5 }}>
                        Two
                    </Link>
                </nav>
                <div className={cl.sidebar}>sidebar</div>
                <main className={cl.content}>
                    <Routes>
                        <Route path="/site/one" element={<One />} />
                        <Route path="/site/two" element={<Two />} />
                    </Routes>
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

