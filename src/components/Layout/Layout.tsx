/* eslint no-unused-vars: "off" */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SidebarRoutes from '../SidebarRoutes';
import TopMenu from '../TopMenu/TopMenu';
import MainContentRoutes from '../MainContentRoutes';
import styles from './Layout.module.scss'
import Loading from '../Loading/Loading';
import TestErrorBoundary from '../TestErrorBoundary';

const Layout = () => {
    return (
        <Router>
            <div className={styles.app}>
                <nav className={styles.navbar}>
                    <TopMenu />
                </nav>
                <div className={styles.sidebar}>
                    <SidebarRoutes />
                </div>
                <main className={styles.content}>
                    <Suspense fallback={<Loading />}>
                        <TestErrorBoundary>
                            <MainContentRoutes />
                        </TestErrorBoundary>
                    </Suspense>
                </main>
                <footer className={styles.footer}>footer</footer>
            </div>
        </Router>

    );
}

export default Layout;


