import React, { useMemo } from 'react';
import styles from './Spinner.module.scss'

interface SpinnerProps {
    diameter?: string
    fontSize?: string
    color?: string
}

const Spinner: React.FC<SpinnerProps> = ({ diameter, fontSize, color }) => {
    const style = useMemo(() => {
        const style: any = {}
        if (diameter) {
            try {
                const d = parseFloat(diameter)
                const units = diameter.replace(/([0-9.]|\s)/g, '')
                style["--diameter"] = d + units
                style["--left"] = d / 2 + units
                console.log(style)
            } catch (error) {
                console.log(error)
            }
        }
        if (fontSize) {
            style["--font-size"] = fontSize
        }
        if (color) {
            style["--color"] = color
        }
        return style as React.CSSProperties
    }, [diameter, fontSize, color])
    console.log(style)
    return (
        <div className={styles.container} style={style}>
            <div className={styles.spinner}>
                <span style={{ "--idx": 0 } as React.CSSProperties}>L</span>
                <span style={{ "--idx": 1 } as React.CSSProperties}>O</span>
                <span style={{ "--idx": 2 } as React.CSSProperties}>A</span>
                <span style={{ "--idx": 3 } as React.CSSProperties}>D</span>
                <span style={{ "--idx": 4 } as React.CSSProperties}>I</span>
                <span style={{ "--idx": 5 } as React.CSSProperties}>N</span>
                <span style={{ "--idx": 6 } as React.CSSProperties}>G</span>
            </div>
        </div >
    );
}

export default Spinner;
