//Counter with functional component

import React, { useEffect, useState } from 'react';

function Counter2() {

    const [count, setCount] = useState(0); //initializing

    //useLayoutEffect is the strictly replacement of componentDidUpdate, but in most cases useEffect
    useEffect(() => {
        let counter = setInterval(() => {
            setCount(prevCounter => prevCounter + 1);
        }, 1000);
        return () => clearInterval(counter); // step: 3
    }, [count]) // step: 1 + 2

    return (
        //rendering
        <h2>
            {
                "Functional Component - " + count
            }
        </h2>
    )
}

export default Counter2;
