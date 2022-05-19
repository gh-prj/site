import React, { ChangeEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test = () => {
    const f = (o: { a?: number, b?: string }) => {
        console.log(o.a?.toPrecision(2), o.b?.toUpperCase())
    }
    f({})
    return (
        <div>
            Test
        </div>
    );
}

export default Test;

