import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import styles from './TimerView.module.scss'
import { Timer } from './store/timer'

const TimerView = observer(() => {
    const [timer] = useState(new Timer());
    useEffect(() => {
        return () => {
            timer.stop()
        };
    }, []);
    return (
        <div className={styles.timer}>
            <button onClick={() => timer.start()} disabled={!timer.isStopped}>Start Timer</button>
            <button onClick={timer.stop} disabled={timer.isStopped}>Stop Timer</button>
            <span>{timer.seconds}</span>
        </div>
    );
})

export default TimerView;
