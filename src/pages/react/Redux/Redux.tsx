import React from 'react';
import { Provider, useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import styles from './Redux.module.scss'

const initialState = {
    balance: 0
}

type Action = "DEPOSIT" | "WITHDRAW"

const reducer = (state = initialState, action: { type: Action, payload: number }) => {
    switch (action.type) {
        case "DEPOSIT":
            return { ...state, balance: state.balance + action.payload }
        case "WITHDRAW":
            return { ...state, balance: state.balance - action.payload }
        default:
            return state;
    }
}

const store = createStore(reducer)

type RootState = ReturnType<typeof store.getState>

const Bank = () => {
    const dispatch = useDispatch()
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
    const balance = useAppSelector(state => state.balance)
    const handleWithdraw = () => {
        dispatch({ type: "WITHDRAW", payload: 7 })
    }
    const handleDeposit = () => {
        dispatch({ type: "DEPOSIT", payload: 5 })
    }
    return (
        <div className={styles.bank}>
            <button onClick={handleWithdraw} disabled={balance < 7}>Withdraw $7</button>
            <span> {balance} </span>
            <button onClick={handleDeposit}>Deposit $5</button>
        </div>
    )
}

const Redux = () => {
    return (
        <div className={styles.container}>
            <Provider store={store}>
                <Bank />
            </Provider>
        </div>
    );
}

export default Redux;
