import React from 'react';
import Counter from './Observable/Counter';
import styles from './MobX.module.scss'
import Todo from './Observable/Todo';
import { NavLink, Outlet } from 'react-router-dom';

const setActive = (isActive: boolean) => isActive ? styles.active : "";

const MobX = () => {
    return (
        <div className={styles.container}>
            <div>
                <nav>
                    <NavLink to="/site/mobx/observable" className={({ isActive }) => setActive(isActive)}>Observable</NavLink>
                    <NavLink to="/site/mobx/actions" className={({ isActive }) => setActive(isActive)}>Actions</NavLink>
                    <NavLink to="/site/mobx/computeds" className={({ isActive }) => setActive(isActive)}>Computeds</NavLink>
                    <NavLink to="/site/mobx/reactions" className={({ isActive }) => setActive(isActive)}>Reactions</NavLink>
                </nav>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default MobX;
