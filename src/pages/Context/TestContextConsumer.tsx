import React from 'react';
import { useTestContext } from './TestContext';

const TestContextConsumer = () => {
    const state = useTestContext();

    return (
        <div>
            TestContext.
            Value: {state.value}
        </div>
    );
}

export default TestContextConsumer;
