import React from 'react';
import styles from './Parallax.module.scss'

const Parallax = () => {
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget
        const div = container.children[0] as HTMLElement
        const offset = container.scrollTop
        div.style.backgroundPositionY = offset * 0.7 + 'px'
    }

    return (
        <div className={styles.container}>
            <div className={styles.container2} onScroll={handleScroll}>
                <div>
                    <h2>Div 1</h2>
                </div>
                <div>
                    <h2>Div 2</h2>
                </div>
                <div>
                    <h2>Div 3</h2>
                </div>
                <div>
                    <h2>Div 4</h2>
                </div>
            </div>
        </div>
    );
}

export default Parallax;
