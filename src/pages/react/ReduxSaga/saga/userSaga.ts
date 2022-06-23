import { AnyAction } from 'redux'
import { put, call, takeEvery, StrictEffect } from 'redux-saga/effects'
import { setUsers } from '../store/userReducer'

const fetchUsers = function() {
    let prevLimit = 0
    return () => {
        let limit
        do {
            limit = Math.ceil(Math.random() * 9)
        } while(limit === prevLimit)
        prevLimit = limit
        return fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
    }
}()

function* fetchUsersWorker() {
    const response: Response = yield call(fetchUsers)
    const users: {name: string}[] = yield call(() => new Promise(resolve => resolve(response.json())))
    yield put(setUsers(users.map(user => user.name)))
}

export function* userWatcher() {
    yield takeEvery("FETCH_USERS", fetchUsersWorker)
}