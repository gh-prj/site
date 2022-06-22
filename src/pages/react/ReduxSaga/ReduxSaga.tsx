import React from 'react';
import styles from './ReduxSaga.module.scss'
import { Provider, useDispatch } from 'react-redux'
import { store } from './store/store'
import { useTypedSelector } from './hooks/useTypedSelector';
import { setUsers, fetchUsers } from './store/userReducer';

const Counter = () => {
    const { count } = useTypedSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div className={styles.counter}>
            <button onClick={() => dispatch({ type: "ASYNC_DECREMENT" })}>-1 After 1 sec</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
            {count}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
            <button onClick={() => dispatch({ type: "ASYNC_INCREMENT" })}>+1 After 1 sec</button>
        </div>
    )
}

const Users = () => {
    const { users } = useTypedSelector(state => state.users)
    const dispatch = useDispatch()
    return (
        <div className={styles.users}>
            <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
            {users.map((user, idx) =>
                <div key={idx}>{user}</div>
            )}
        </div>
    )
}
const ReduxSaga = () => {
    return (
        <div className={styles.container}>
            <Provider store={store}>
                <Counter />
                <Users />
            </Provider>
        </div>
    );
}

export default ReduxSaga;
