import React, { FC, HTMLAttributes } from 'react';
import RenderCnt from './RenderCnt';

// interface PropsPart {
//     children: React.ReactNode
//     showRenders?: boolean
//     style?: React.CSSProperties
// }
// type Props = PropsPart & React.HTMLProps<HTMLDivElement>
interface Props extends HTMLAttributes<HTMLLabelElement> {
    showRenders?: boolean
}

const Label: FC<Props> = ({ children, showRenders, title, ...props }) => {
    return (
        <div style={{
            display: 'inline-flex',
            flexDirection: 'column',
            // ...style,
            // background: 'inherit'
        }} >
            {title !== undefined && (title.trim() ? title : <>&nbsp;</>)}
            {/* <label style={{ background: style?.background || 'inherit' }}> */}
            <label {...props}>{children}</label>
            { showRenders && <RenderCnt />}
        </div >
    );
}

export default Label;
