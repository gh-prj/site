import React, { useEffect, useReducer } from 'react';
import Spinner from '../../../../components/UI/Spinner/Spinner';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from './TodoList.module.scss'

const TodoList: React.FC = () => {
    const { todos, error, loading, page, limit } = useTypedSelector((state) => state.todo)
    const { fetchTodos, setTodosPage } = useActions()
    const pages = [1, 2, 3, 4, 5]
    useEffect(() => {
        fetchTodos(page, limit)
    }, [page]);

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
            {todos.map((todo) => (
                <div key={todo.id} className={styles.todo}>
                    <span>{todo.id}.</span> {todo.title}
                </div>
            ))}
            <div className={styles.pager} >
                {pages.map((p) => (
                    <div
                        key={p}
                        onClick={() => setTodosPage(p)}
                        style={{
                            border: p === page
                                ? "1px solid red"
                                : "1px solid lightgrey",
                        }}
                    >
                        {p}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
