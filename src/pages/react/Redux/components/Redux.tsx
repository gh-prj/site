import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Provider } from "react-redux"
import { store } from "../store"
import styles from './Redux.module.scss'

const setActive = (isActive: boolean) => isActive ? styles.active : "";

const Redux = () => {
    return (
        <Provider store={store}>
            <div className={styles.container}>
                <nav>
                    <NavLink to="/site/redux/users" className={({ isActive }) => setActive(isActive)}>Users</NavLink>
                    <NavLink to="/site/redux/todos" className={({ isActive }) => setActive(isActive)}>Todos</NavLink>
                </nav>
                <div>
                    <Outlet />
                </div>
            </div>
        </Provider>
    );
}

export default Redux;
