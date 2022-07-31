import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './TypeScript.module.scss'

const setActive = (isActive: boolean) => isActive ? styles.active : "";

const TypeScript = () => {
    return (
        <div className={styles.container}>
            <div>
                <nav>
                    <NavLink to="/site/ts/props" className={({ isActive }) => setActive(isActive)}>Props</NavLink>
                    <NavLink to="/site/ts/events" className={({ isActive }) => setActive(isActive)}>Events</NavLink>
                    <NavLink to="/site/ts/hooks" className={({ isActive }) => setActive(isActive)}>Hooks</NavLink>
                </nav>
                <div className={styles.outlet}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default TypeScript;
