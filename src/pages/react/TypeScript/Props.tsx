import React, { useState } from 'react';
// interface Props extends React.ComponentProps<"button"> {
interface Props extends React.ComponentPropsWithoutRef<"button"> {
    primary?: boolean;
    onClick?: () => void;
}
const MyButton: React.FC<Props> = ({
    primary, onClick, children, style, ...props
}) => {
    return (
        <button
            {...props}
            style={{ ...style || {}, color: primary ? "red" : "black" }}
            onClick={onClick}
        > {children} </button>
    );
};

const Props = () => {
    const [value, setValue] = useState(0);
    const handleClick = () => {
        setValue(v => v + 1)
    }
    return (
        <div>
            <MyButton primary onClick={handleClick}>Button1</MyButton>
            <span> {value} </span>
            <MyButton style={{ background: "aqua" }}>Button2</MyButton>
            <pre><code>
                {
                    `import React, { useState } from 'react';

interface Props extends React.ComponentProps<"button"> {
    primary?: boolean;
    onClick?: () => void;
}

const MyButton: React.FC<Props> = ({
    primary, onClick, children, style, ...props
}) => {
    return (
        <button
            {...props}
            style={{ ...style || {}, color: primary ? "red" : "black" }}
            onClick={onClick}
        > {children} </button>
    );
};

const App = () => {
    const [value, setValue] = useState(0);
    const handleClick = () => {
        setValue(v => v + 1)
    }
    return (
        <div>
            <MyButton primary onClick={handleClick}>Button1</MyButton>
            <span> {value} </span>
            <MyButton style={{ background: "aqua" }}>Button2</MyButton>
        </div>
    );
}
`}
            </code></pre>
        </div>
    );
}

export default Props;
