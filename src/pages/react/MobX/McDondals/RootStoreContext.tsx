import { trace } from 'mobx';
import React, { createContext, FC, useContext, useEffect, useState } from 'react'
import { RootStore } from './store/rootStore';

console.log('<createContext<RootStore>>')
const RootStoreContext = createContext<RootStore>(undefined!);
console.log('</createContext<RootStore>>')

interface Props {
    children: React.ReactNode
}

export const RootStoreProvider: FC<Props> = ({ children }) => {
    const [store] = useState(() => {
        console.log('<useState in RootStoreProvider>')
        const state = new RootStore()
        console.log('</useState in RootStoreProvider>')
        return state
    });
    useEffect(() => {
        return () => {
            store.save()
            store.dispose()
        };
    }, []);
    return (
        <RootStoreContext.Provider value={store}>
            {children}
        </RootStoreContext.Provider>
    )
}

export const useRootStore = () => useContext(RootStoreContext)
