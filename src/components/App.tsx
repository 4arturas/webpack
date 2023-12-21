import React from "react";
import classes from './App.module.scss'

export const App = () =>
{
    const [count, setCount] = React.useState<number>(0);
    const increment = () => setCount( prev => prev + 1 );
    return (
        <div>
            <h1 className={classes.value}>Hello World!</h1>
            <h2>{count}</h2>
            <button className={classes.button} onClick={increment}>inc<span>Hello</span></button>
        </div>
    )
}