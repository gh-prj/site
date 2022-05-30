import React, { ChangeEvent, useReducer, useState } from 'react';
import styles from './UseReducer.module.scss'
import imgDelete from './delete.png'

interface Todo {
    id: number
    title: string
    done: boolean
}

const initialTodos: Todo[] = [
    {
        id: 1,
        title: "Sit amet consectetur adipisicing.",
        done: false
    },
    {
        id: 2,
        title: "Modi, nostrum magni.",
        done: true
    },
    {
        id: 4,
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus maxime impedit ipsam corrupti alias debitis, mollitia dolore perferendis excepturi aut.",
        done: true
    },
    {
        id: 3,
        title: "Nam molestias voluptatum labore.",
        done: false
    },
]

enum TodoActionType {
    TOGGLE_DONE = "TOGGLE_DONE",
    CREATE = "CREATE",
    DELETE = "DELETE"
}

interface ToggleDoneAction {
    type: TodoActionType.TOGGLE_DONE
    payload: number
}

interface CreateAction {
    type: TodoActionType.CREATE
    payload: string
}

interface DeleteAction {
    type: TodoActionType.DELETE
    payload: number
}

type TodoAction =
    | ToggleDoneAction
    | CreateAction
    | DeleteAction

const reducer = (state: Todo[], action: TodoAction) => {
    switch (action.type) {
        case TodoActionType.TOGGLE_DONE:
            return [...state.map(todo =>
                todo.id !== action.payload
                    ? todo
                    : { ...todo, done: !todo.done })
            ]
        case TodoActionType.DELETE:
            return [...state.filter(todo =>
                todo.id !== action.payload)
            ]
        case TodoActionType.CREATE:
            return [...state,
            {
                id: Date.now(),
                title: action.payload,
                done: false
            }
            ]
        default:
            return state;
    }
}

const UseReducer = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos)
    const [title, setTitle] = useState("");
    const handleToggleDone = (todo: Todo) => {
        dispatch({ type: TodoActionType.TOGGLE_DONE, payload: todo.id })
    }
    const handleDelete = (todo: Todo) => {
        dispatch({ type: TodoActionType.DELETE, payload: todo.id })
    }
    const handleAddTodo = () => {
        const newTitle = title || `New Todo ${Date.now()}`;
        setTitle("")
        dispatch({ type: TodoActionType.CREATE, payload: newTitle })
    }
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    return (
        <div className={styles.container}>
            <div className={styles.newTodo}>
                <input type="text" value={title}
                    placeholder="New Todo"
                    onChange={e => handleTitleChange(e)} />
                <button onClick={handleAddTodo}>Add</button><br />
            </div>
            <span>Total: {todos.length}, Completed: {todos.filter(todo => todo.done).length}</span>
            <div className={styles.todoList}>
                {todos.map(todo =>
                    <div key={todo.id} className={styles.todo}>
                        <input type="checkbox"
                            checked={todo.done}
                            onChange={() => handleToggleDone(todo)}></input>
                        <span>{todo.title}</span>
                        <img src={imgDelete} onClick={() => handleDelete(todo)}></img>
                    </div>)}
            </div>
        </div>
    );
}

export default UseReducer;
