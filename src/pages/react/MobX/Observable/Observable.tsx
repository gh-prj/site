import React from 'react';
import Counter from './Counter';
import TimerView from './TimerView';
import TimerView2 from './TimerView2';
import Todo from './Todo';

const Observable = () => {
    return (
        <div>
            <Counter />
            <TimerView />
            <TimerView2 />
            <Todo />
        </div>
    );
}

export default Observable;
