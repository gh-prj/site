import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import TestStore from './testStore';

console.log('< createContext <TestStore> >')
const TestContext = createContext<TestStore>(undefined!)
console.log('</createContext <TestStore> >')

interface Props {
    children: React.ReactNode
}

const TestContextProvider: FC<Props> = ({ children }) => {
    const [store, setStore] = useState(() => new TestStore());
    useEffect(() => {
        return () => {
            store.dispose()
        };
    }, [store]);
    return (
        <TestContext.Provider value={store}>
            {children}
        </TestContext.Provider>
    );
}

export default TestContextProvider;
export const useTestContext = () => useContext(TestContext);
