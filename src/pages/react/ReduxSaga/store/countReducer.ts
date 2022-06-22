interface CountState {
    count: number
}

const initialState: CountState = {
    count: 0
}

interface CountAction {
    type: "INCREMENT" | "DECREMENT"
}

export const countReducer = (state = initialState, action: CountAction): CountState => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        default:
            return state
    }
}