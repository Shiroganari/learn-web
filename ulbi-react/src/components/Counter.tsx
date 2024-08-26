import { useState } from 'react'
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2 className={classes.title}>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
        </div>
    )
}
