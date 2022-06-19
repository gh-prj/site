import { type } from 'os';
import React, { CSSProperties, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styles from './SideMenu.module.scss'

type MenuItem = 'users' | 'todos';
interface SideMenuProps extends HTMLAttributes<any> {
    active: MenuItem
}

const SideMenu: React.FC<SideMenuProps> = ({ active }) => {
    return (
        <div className={styles.container}>
            <ul>
                <li className={active === "users" && styles.active || ""}><Link to="/site/reduxthunk/users" >Users</Link></li>
                <li className={active === "todos" && styles.active || ""}><Link to="/site/reduxthunk/todos">Todos</Link></li>
            </ul>
        </div>
    );
}

export default SideMenu;
