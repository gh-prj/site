import React, { ChangeEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { f7 } from './Test2'
import styles from './Test.module.scss'

type Tp = string | number;
type Tx<T extends Tp> = T;

const Test = () => {
    const [value, setValue] = useState("2");
    const f = (o: { a?: number, b?: string }) => {
        console.log(o.a?.toPrecision(2), o.b?.toUpperCase())
    }
    f({})
    // const t: Tx<boolean> = true; // TS2344: Type 'boolean' does not satisfy the constraint 'Tp'
    const t: Tx<number> = 235;
    const v: Tx<string> = '235';
    console.log(t, v)

    f7();

    const msg =
        `x       x
  x   x
    x
  x   x 
x       x`
    return (
        <div className={styles.container}>
            Test
            <div style={{ whiteSpace: 'pre' }}>{msg}</div>
            {/* <div className={styles.test}></div> */}
        </div>
    );
}

export default Test;

// const X = (): void => {
//     const fn = <T>(x:T):T=>{
//     return x
//     }
// }