import axios from "axios";
import { Dispatch } from "react";
import { TodoAction, TodoActionType } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.FETCH_TODOS });
      const response = await axios(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _page: page, _limit: limit },
        }
      );
      setTimeout(() => {
        dispatch({
          type: TodoActionType.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: TodoActionType.FETCH_TODOS_ERROR,
        payload: "ERROR while loading todos:\n",
      });
    }
  };
};

export function setTodosPage(page: number): TodoAction {
  return { type: TodoActionType.SET_PAGE, payload: page };
}
