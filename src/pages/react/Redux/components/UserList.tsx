import React, { useEffect, useReducer } from 'react';
import Spinner from '../../../../components/UI/Spinner/Spinner';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from './UserList.module.scss'

const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector((state) => state.user)
    const { fetchUsers } = useActions()
    useEffect(() => {
        fetchUsers()
    }, []);

    if (loading) {
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            position: 'absolute',
            top: 24,
            right: 0,
            bottom: 0,
            left: 0
        }}>
            <Spinner color="#8b854a" />
        </div>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className={styles.container}>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
}

export default UserList;
