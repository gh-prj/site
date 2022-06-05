import React from 'react';
import styles from './FoldingCube.module.scss'

const FoldingCube = () => {
    return (
        <div className={styles.container}>
            <div className={styles.camera}>
                <div className={styles.space}>
                    <div className={styles.one}>
                        <span>1</span>
                        <div className={styles.two}>
                            <span>2</span>
                            <div className={styles.three}>
                                <span>3</span>
                                <div className={styles.four}>
                                    <span>4</span>
                                </div>
                                <div className={styles.five}>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.six}>
                            <span>6</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoldingCube;
