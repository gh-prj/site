import React from 'react';
import RenderCnt from './RenderCnt';

interface PropsPart {
    children: React.ReactNode
    showRenders?: boolean
    style?: React.CSSProperties
}
type Props = PropsPart & React.HTMLProps<HTMLDivElement>

const Label: React.FC<Props> = ({ children, showRenders, style, ...props }) => {
    console.log('Label')
    return (
        <div {...props} style={{
            display: 'inline-flex',
            flexDirection: 'column',
            ...style,
            background: 'inherit'
        }} >
            <label style={{ background: style?.background || 'inherit' }}>
                {children}
            </label>
            { showRenders && <RenderCnt />}
        </div >
    );
}

export default Label;
