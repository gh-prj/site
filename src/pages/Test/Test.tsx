import React, { ChangeEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test = () => {
    const [value, setValue] = useState("2");
    const f = (o: { a?: number, b?: string }) => {
        console.log(o.a?.toPrecision(2), o.b?.toUpperCase())
    }
    f({})
    const msg =
        `x       x
  x   x
    x
  x   x 
x       x`
    return (
        <div>
            Test
            <div style={{ whiteSpace: 'pre' }}>{msg}</div>
        </div>
    );
}

export default Test;

