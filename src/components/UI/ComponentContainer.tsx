import React, { HTMLAttributes, PropsWithChildren } from 'react';
import RenderCnt from './RenderCnt';

interface Pr<T> extends HTMLAttributes<T> {
    test?: string
}

const ComponentContainer = <HTMLDivElement,>(props: PropsWithChildren<Pr<HTMLDivElement>>) => {
    return (
        <div style={{
            display: 'inline-flex',
            flexDirection: 'column',
            ...props.style,
            background: 'inherit'
        }}>
            <div>
                {props.children}
            </div>
            {/* <RenderCnt /> */}
        </div>
    );
}

export default ComponentContainer;
