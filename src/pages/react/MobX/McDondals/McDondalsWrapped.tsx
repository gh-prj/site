import React from 'react';
import McDondals from './McDondals';
import { RootStoreProvider } from './RootStoreContext';

const McDondalsWrapped = () => {
    return (
        <RootStoreProvider>
            <McDondals />
        </RootStoreProvider>
    );
}

export default McDondalsWrapped;
