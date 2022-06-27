import React, { CSSProperties } from 'react';
import styles from './Menu3D.module.scss'

const Menu3D = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li style={{ "--i": 6 } as CSSProperties}><a href="#">Home</a></li>
                <li style={{ "--i": 5 } as CSSProperties}><a href="#">About</a></li>
                <li style={{ "--i": 4 } as CSSProperties}><a href="#">Services</a></li>
                <li style={{ "--i": 3 } as CSSProperties}><a href="#">Portfolio</a></li>
                <li style={{ "--i": 2 } as CSSProperties}><a href="#">Our Team</a></li>
                <li style={{ "--i": 1 } as CSSProperties}><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

export default Menu3D;
