import React from "react";
export const App = () =>
{
    const [count, setCount] = React.useState<number>(0);
    const increment = () => setCount( prev => prev + 1 );
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>{count}</h2>
            <button onClick={increment}>inc</button>
        </div>
    )
}