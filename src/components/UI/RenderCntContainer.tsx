import React, { FC, HTMLAttributes } from 'react';
import RenderCnt from './RenderCnt';

interface Props extends HTMLAttributes<HTMLDivElement> {
    test?: string
}
const RenderCntContainer: FC<Props> = ({ title, style, children, ...props }) => {
    console.log({ title }, { style }, { props })
    return (
        <div {...props} style={{
            display: 'inline-flex',
            flexDirection: 'column',
            ...style,
            backgroundColor: style?.backgroundColor || 'inherit'
        }}>
            {(title !== undefined) && title.trim() ? title : <>&nbsp;</>}
            <div>
                {children}
            </div>
            <RenderCnt />
        </div>
    );
}

export default RenderCntContainer;
