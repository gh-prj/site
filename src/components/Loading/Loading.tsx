import React, { HTMLAttributes } from 'react';
import styles from './Loading.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
    msg?: string
}

const Loading: React.FC<Props> = ({ children, style, ...props }) => {
    return (
        <div
            className={styles.container}
            style={style || {}}
            {...props}
        >
            {children || "Loading..."}
        </div>
    );
}

export default Loading;
