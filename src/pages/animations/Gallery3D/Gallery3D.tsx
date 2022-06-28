import React, { CSSProperties } from 'react';
import styles from './Gallery3D.module.scss'
import img1 from './1.jpeg'
import img2 from './2.jpeg'
import img3 from './3.jpeg'
import img4 from './4.jpeg'
import img5 from './5.jpeg'
import img6 from './6.jpeg'
import img7 from './7.jpeg'
import img8 from './8.jpeg'

const Gallery3D = () => {
    return (
        <div className={styles.container}>
            <div className={styles.scene}>
                <div className={styles.carousel}>
                    <span style={{ "--i": 1 } as CSSProperties}><img src={img1} alt="" /></span>
                    <span style={{ "--i": 2 } as CSSProperties}><img src={img2} alt="" /></span>
                    <span style={{ "--i": 3 } as CSSProperties}><img src={img3} alt="" /></span>
                    <span style={{ "--i": 4 } as CSSProperties}><img src={img4} alt="" /></span>
                    <span style={{ "--i": 5 } as CSSProperties}><img src={img5} alt="" /></span>
                    <span style={{ "--i": 6 } as CSSProperties}><img src={img6} alt="" /></span>
                    <span style={{ "--i": 7 } as CSSProperties}><img src={img7} alt="" /></span>
                    <span style={{ "--i": 8 } as CSSProperties}><img src={img8} alt="" /></span>
                </div>
                <div className={styles.middle}>Pure CSS Gallery</div>
            </div>
        </div>
    );
}

export default Gallery3D;
