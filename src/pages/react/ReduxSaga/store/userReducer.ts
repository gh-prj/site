interface UserState {
    users: string[]
}

const initialState: UserState = {
    users: []
}

interface UserAction {
    type: "SET_USERS"
    payload: string[]
}

export default function userReducer(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case "SET_USERS":
            return { ...state, users: action.payload }
        default:
            return state
    }
}

export const setUsers = (payload: string[]) => ({type: "SET_USERS", payload})
export const fetchUsers = () => ({type: "FETCH_USERS"})