type Todo = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean,
}

export interface TodoState {
    todos: Todo[]
    loading: boolean
    error: string | null
    page: number
    limit: number
}

export enum TodoActionType {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_PAGE = "SET_PAGE",
}

interface FetchTodosAction {
    type: TodoActionType.FETCH_TODOS
}

interface FetchTodosErrorAction {
    type: TodoActionType.FETCH_TODOS_ERROR
    payload: string
}

interface FetchTodosSuccessAction {
    type: TodoActionType.FETCH_TODOS_SUCCESS
    payload: Todo[]
}

interface SetPageAction {
    type: TodoActionType.SET_PAGE
    payload: number
}

export type TodoAction =
    | FetchTodosAction
    | FetchTodosSuccessAction
    | FetchTodosErrorAction
    | SetPageAction

