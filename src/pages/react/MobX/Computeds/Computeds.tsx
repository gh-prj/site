import { action, comparer, reaction } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react';
import React, { useEffect, useRef } from 'react';
import styles from './Computeds.module.scss'

const Computeds = observer(() => {
    const refBlank = useRef<HTMLDivElement>(null)
    const refProduct = useRef<HTMLDivElement>(null)
    const calc = useLocalObservable(() => ({
        x: 0.5,
        y: 0.9,
        get productSize() {
            return {
                x: this.x,
                y: this.y
            }
        },
        get blankSize() {
            return {
                x: Math.ceil(this.x),
                y: Math.ceil(this.y)
            }
        }
    }), {})

    useEffect(() => {
        const dispose = reaction(
            (r) => calc.blankSize,
            (curr, prev, r) => {
                refBlank.current!.style.transitionDelay = (curr.x < prev!.x || curr.y < prev!.y) ? '.9s' : '0s'
                refBlank.current!.style.width = 50 * curr.x + 'px'
                refBlank.current!.style.height = 50 * curr.y + 'px'
                console.log(`[Blank] x: ${curr.x}; y: ${curr.y}`)
                console.log('delay: ', refBlank.current!.style.transitionDelay)
            },
            {
                fireImmediately: true
                , equals: comparer.structural
            }
        )
        return () => {
            console.log('disposing...')
            dispose()
            console.log('disposed')
        };
    }, []);

    useEffect(() => {
        const dispose = reaction(
            (r) => calc.productSize,
            (curr, prev, r) => {
                refProduct.current!.style.width = 50 * curr.x + 'px'
                refProduct.current!.style.height = 50 * curr.y + 'px'
                console.log(`[Product] x: ${curr.x}; y: ${curr.y}`)
            },
            {
                fireImmediately: true
            }
        )
        return () => {
            dispose()
        };
    }, []);
    return (
        <div className={styles.container}>
            <select onChange={
                action(e => calc.x = parseFloat(e.target.value))
            }>
                <option value="0.5">0.5</option>
                <option value="1.0">1.0</option>
                <option value="1.3">1.3</option>
                <option value="1.7">1.7</option>
                <option value="2.0">2.0</option>
                <option value="2.5">2.5</option>
                <option value="3.1">3.1</option>
                <option value="3.8">3.8</option>
                <option value="4.1">4.1</option>
                <option value="4.9">4.9</option>
            </select>
            <select onChange={
                action(e => calc.y = parseFloat(e.target.value))
            }>
                <option value="0.9">0.9</option>
                <option value="1.1">1.1</option>
                <option value="1.6">1.6</option>
                <option value="2.1">2.1</option>
                <option value="2.5">2.5</option>
                <option value="2.9">2.9</option>
                <option value="3.2">3.2</option>
                <option value="3.7">3.7</option>
                <option value="4.4">4.4</option>
                <option value="4.8">4.8</option>
            </select>
            <div className={styles.chart}>
                <div ref={refBlank} className={styles.blank}>
                    <div ref={refProduct} className={styles.product}></div>
                    <div className={styles.ruler}>
                        <span>0</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                    <div className={styles.ruler}>
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Computeds;
