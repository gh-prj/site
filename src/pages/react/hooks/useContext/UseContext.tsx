import React, { createContext, useContext, useState } from 'react';
import styles from './UseContext.module.scss'
interface MyContextType {
    num: number
}
const MyContext = createContext<MyContextType | null>(null)

const UseContext = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <span className={styles.bold}>const MyContext = createContext(null)</span><br />
            <div className={styles.container}>
                <MyContext.Provider value={{ num: value }}>
                    <span>OuterComponent</span><br />
                    <span className={styles.bold}>const [value, setValue] = useState(0)</span><br />
                    <span className={styles.bold}>{`{value}:`}</span><label>{value}</label>&nbsp;
                    <button onClick={() => setValue(value + 1)}>setValue(value+1)</button><br />
                    <span className={styles.bold}>{`<MyContext.Provider value={{ num: value }}>`}</span><br />
                    <InnerComponent1 /><br />
                    <span className={styles.bold}>{`</MyContext.Provider>`}</span><br />
                </MyContext.Provider>
            </div >
        </>
    );
}

export default UseContext;

const InnerComponent1 = () => {
    return (
        <div>
            <span>InnerComponent1</span><br />
            <InnerComponent2 />
        </div>
    )
}

const InnerComponent2 = () => {
    return (
        <div>
            <span>InnerComponent2</span><br />
            <InnerComponent3 />

        </div>
    )
}

const InnerComponent3 = () => {
    const ctx = useContext(MyContext);
    return (
        <div>
            <span>InnerComponent3</span><br />
            <span className={styles.bold}>const ctx = useContext(MyContext)</span><br />
            <span className={styles.bold}>{`{ctx.num}`}:</span>
            <label>{ctx?.num}</label>
        </div>
    )
}