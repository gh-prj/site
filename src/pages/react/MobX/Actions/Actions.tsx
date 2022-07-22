import { action } from 'mobx';
import { observer } from 'mobx-react';
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Actions.module.scss'
import { Bound } from './store/bound'

const bound = new Bound()

const Actions = observer(() => {
    return (
        <div className={styles.container}>
            <pre><code>
                {`makeObservable(this, {
    value: observable,
    unboundIncrement: action,
    boundIncrement: action.bound
})`}
            </code></pre>
            <div>value: {bound.value}</div>
            <ValueList2 store={bound} />
            <div>
                <div>
                    <button onClick={() => bound.unboundIncrement()}>+1</button>
                    <pre><code>
                        {`<button onClick={() => 
    store.unboundIncrement()
}>+1</button>`}
                    </code></pre>
                </div>
                <div>
                    <button onClick={bound.unboundIncrement}>+1</button>
                    <pre><code>
                        {`<button onClick={
    store.unboundIncrement
}>+1</button>`}
                    </code></pre>
                </div>
                <div>
                    <button onClick={bound.boundIncrement}>+1</button>
                    <pre><code>
                        {`<button onClick={
    store.boundIncrement
}>+1</button>`}
                    </code></pre>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={action(() => {
                        bound.unboundIncrement()
                        bound.unboundIncrement()
                    })}>+1+1</button>
                    <pre><code>
                        {`<button onClick={action(() => {
    bound.unboundIncrement()
    bound.unboundIncrement()
})}>+1+1</button>`}
                    </code></pre>
                </div>
                <div>
                    <button onClick={() => {
                        bound.unboundIncrement()
                        bound.unboundIncrement()
                    }}>+1+1</button>
                    <pre><code>
                        {`<button onClick={() => {
    bound.unboundIncrement()
    bound.unboundIncrement()
}}>+1+1</button>`}
                    </code></pre>
                </div>
                <div>
                    <button onClick={action(() => {
                        setTimeout(async () => {
                            bound.unboundIncrement()
                            await ((ms) =>
                                new Promise(resolve =>
                                    setTimeout(resolve, ms)
                                ))(500)
                            bound.unboundIncrement()
                        }, 500)
                    })}>+1+1</button>
                    <pre><code>
                        {`<button onClick={action(() => {
    setTimeout(async () => {
        bound.unboundIncrement()
        await ((ms) =>
            new Promise(resolve =>
                setTimeout(resolve, ms)
            ))(500)
        bound.unboundIncrement()
    }, 500)
})}>+1+1</button>`}
                    </code></pre>
                </div>
                {/* <ValueList store={bound} /><br /> */}
            </div >
        </div >
    );
})

export default Actions;

interface ValueListProps {
    store: { value: number }
}

function ValueList({ store }: ValueListProps) {
    const values = useRef<number[]>([])
    useEffect(() => {
        values.current.push(store.value)
    }, [store.value]);
    return (
        <>
            {values.current.join(', ')}
        </>
    )
}

interface ValueList2Props {
    store: { values: number[] }
}

function ValueList2({ store }: ValueList2Props) {
    return (
        <>
            {store.values.join(', ')}
        </>
    )
}