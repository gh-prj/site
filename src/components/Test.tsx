import React, { useState } from 'react';

const Test = () => {
    const [value, setValue] = useState(0);

    const handleDec = () => {
        setValue(v => v - 1)
    }

    const handleInc = () => {
        setValue(v => v + 1)
    }

    return (
        <div style={{ display: 'flex' }}>
            <button onClick={handleDec}>-</button>
            <div style={{
                width: 40,
                background:
                    value < 0 ? 'rgba(255,0,0,0.2)'
                        : value > 0 ? 'rgba(0,255,0,0.2)'
                            : 'lightgrey',
                margin: '0 5px'
            }}>{value}</div>
            <button onClick={handleInc}>+</button>
        </div>
    );
}

export default Test;
