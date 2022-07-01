
import React, { CSSProperties } from 'react';
import styles from './Navbar.module.scss'

const Navbar = () => {
    const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
        const li = (e.target as HTMLElement).closest('li');
        const number = li?.getAttribute('data-number')
        const current = li?.parentElement?.getElementsByClassName(`${styles.current}`)[0] as HTMLElement
        current?.style.setProperty('--active', number ?? '0')
    }

    return (
        <div className={styles.container}>
            <ul className={styles.menu} onClick={handleClick}>
                <div className={styles.current} style={{ "--active": 0 } as CSSProperties}></div>
                <li data-number="0">
                    <a>
                        <div className={styles.iconSquare}>
                            <i className="icon fa fa-home"></i>
                        </div>
                        <div className={styles.title}>Home</div>
                    </a>
                </li>
                <li data-number="1">
                    <a>
                        <div className={styles.iconSquare}>
                            <i className="icon fa fa-user"></i>
                        </div>
                        <div className={styles.title}>profile</div>
                    </a>
                </li>
                <li data-number="2">
                    <a>
                        <div className={styles.iconSquare}>
                            <i className="icon fa fa-facebook-messenger"></i>
                        </div>
                        <div className={styles.title}>messages</div>
                    </a>
                </li><li data-number="3">
                    <a>
                        <div className={styles.iconSquare}>
                            <i className="icon fa fa-cog"></i>
                        </div>
                        <div className={styles.title}>Settings</div>
                    </a>
                </li><li data-number="4">
                    <a>
                        <div className={styles.iconSquare}>
                            <i className="icon fa fa-sign-out-alt"></i>
                        </div>
                        <div className={styles.title}>Sign out</div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
