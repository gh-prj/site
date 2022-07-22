import { makeAutoObservable } from "mobx"

interface Todo {
    id: number
    title: string
    completed: boolean
}

class TodoList {
    todos: Todo[] = [
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: true },
        { id: 3, title: "Todo 3", completed: false },
    ]

    constructor() {
        makeAutoObservable(this)
    }

    add(title: string) {
        this.todos.push({
            id: (this.todos[this.todos.length - 1]?.id || 0) + 1,
            title,
            completed: false
        })
    }

    remove(id: number) {
        this.todos = this.todos.filter(item => item.id != id)
    }

    toggleCompleted(todo: Todo) {
        todo.completed = !todo.completed
    }
}

export default new TodoList()