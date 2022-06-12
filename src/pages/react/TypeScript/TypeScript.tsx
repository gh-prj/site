import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './TypeScript.module.scss'

const setActive = (isActive: boolean) => isActive ? styles.active : "";

const TypeScript = () => {
    return (
        <div className={styles.container}>
            <nav>
                <NavLink to="/site/ts/props" className={({ isActive }) => setActive(isActive)}>Props</NavLink>
                <NavLink to="/site/ts/events" className={({ isActive }) => setActive(isActive)}>Events</NavLink>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default TypeScript;
