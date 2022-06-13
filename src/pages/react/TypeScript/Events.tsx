import React, { useState } from 'react';

const MyInput = (props: React.HTMLProps<HTMLInputElement>) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue1(e.target.value)
    }
    const onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        setValue2((e.target as HTMLInputElement).value)
    }
    return (
        <>
            <input
                type="text"
                placeholder="MyInput"
                onChange={onChange}
                onKeyUp={onKeyUp}
            />
            <span> {value1} </span>
            <span> {value2} </span>
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

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue1(e.target.value)
    }

    const onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        setValue2((e.target as HTMLInputElement).value)
    }

    return (
        <>
            <input
                type="text"
                placeholder="MyInput"
                onChange={onChange}
                onKeyUp={onKeyUp}
            />
            <span> {value1} </span>
            <span> {value2} </span>
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
