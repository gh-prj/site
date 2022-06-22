import {put, takeEvery} from 'redux-saga/effects'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put({type: "INCREMENT"})
}

function* decrementWorker() {
    yield delay(1000)
    yield put({type: "DECREMENT"})
}

export function* countWatcher() {
    yield takeEvery("ASYNC_INCREMENT", incrementWorker)
    yield takeEvery("ASYNC_DECREMENT", decrementWorker)
}