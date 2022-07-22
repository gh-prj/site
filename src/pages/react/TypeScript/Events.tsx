import React, { useState } from 'react';

const MyInput = (props: React.HTMLProps<HTMLInputElement>) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [coord, setCoord] = useState('X: 0, Y: 0');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue1(e.target.value)
    }
    const onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        setValue2((e.target as HTMLInputElement).value)
    }
    const onClick: React.MouseEventHandler = (e) => {
        setCoord(`X: ${e.clientX}, Y: ${e.clientY}`)
    }
    return (
        <>
            <input
                type="text"
                placeholder="MyInput"
                onChange={onChange}
                onKeyUp={onKeyUp}
                onClick={onClick}
            />
            <span> {value1} </span>
            <span> {value2} </span><br />
            <span>&nbsp;{coord}</span>
        </>
    )
}

const Events = () => {
    return (
        <div>
            <MyInput
                maxLength={12}
            />
            <pre><code>
                {
                    `import React, { useState } from 'react';

const MyInput = (props: React.HTMLProps<HTMLInputElement>) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [coord, setCoord] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue1(e.target.value)
    }

    const onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        setValue2((e.target as HTMLInputElement).value)
    }

    const onClick: React.MouseEventHandler = (e) => {
        setCoord(${"`"}X: ${"$"}{e.clientX}, Y: ${"$"}{e.clientY}${"`"})
    }

    return (
        <>
            <input
                type="text"
                placeholder="MyInput"
                onChange={onChange}
                onKeyUp={onKeyUp}
                onClick={onClick}
            />
            <span> {value1} </span>
            <span> {value2} </span>
            <span>&nbsp;{coord}</span>
        </>
    )
}

const App = () => {
    return (
        <div>
            <MyInput maxLength={12} />
        </div>
    );
}
`}
            </code></pre>
        </div>
    );
}

export default Events;
