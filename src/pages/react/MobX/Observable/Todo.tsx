import { observer } from 'mobx-react';
import React, { useState } from 'react';
import todoList from './store/todo';
import styles from "./Todo.module.scss";

const Todo = observer(() => {
    const [title, setTitle] = useState('');
    return (
        <div className={styles.todos}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button disabled={!title.length} onClick={() => todoList.add(title)}>Add</button>
            {todoList.todos.map(todo =>
                <div key={todo.id} className={styles.todo}>
                    <input type="checkbox" checked={todo.completed} onChange={() => todoList.toggleCompleted(todo)} />
                    {todo.title}
                    <button onClick={() => todoList.remove(todo.id)}>x</button>
                </div>
            )}
        </div>
    );
})

export default Todo;
