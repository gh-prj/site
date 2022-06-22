import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { countReducer } from './countReducer'
import createSagaMiddleware from 'redux-saga'
import {countWatcher} from '../saga/countSaga'
import userReducer from './userReducer'
import { rootWatcher } from "../saga/index";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    counter: countReducer,
    users: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
export type RootState = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootWatcher)