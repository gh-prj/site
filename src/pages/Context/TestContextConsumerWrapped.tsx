import React from 'react';
import TestContextProvider, { useTestContext } from './TestContext';
import TestContextConsumer from './TestContextConsumer';

const TestContextConsumerWrapped = () => {
    // const state = useTestContext();

    return (
        <TestContextProvider>
            {/* <div>
                TestContextConsumerWrapped.
                Value: {state.value}
            </div> */}
            TestContextConsumerWrapped.
            <TestContextConsumer />
        </TestContextProvider>
    );
}

export default TestContextConsumerWrapped;
