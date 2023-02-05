//Counter with class component

import React from 'react';

class Counter extends React.Component {

    //LifeCycle Phase-1(a): Mounting - Initalization
    constructor(props) {
        super(props);
        this.state = { initialCounter: 0 };
    }

    //LifeCycle Phase-1(c): Mounting - It's done once just after the component is initiated.
    componentDidMount() {
        this.counter = setInterval(() => {
            this.setState({
                initialCounter: this.state.initialCounter + 1,
            });
        }, 1000);
    }



    //LifeCycle Phase-2: Updating - It's done many more times starting after the mounting phase and before going to the unmounting phase. It's a growing phase



    //LifeCycle Phase-3: Unmounting - It's done only once which is the last phase - It means death of the component. The component is being removed from the dom. 
    componentWillUnmount() {
        clearInterval(this.counter);
    }

    //LifeCycle Phase-1(b): Mounting - It's rendering which is used to display the actual output to the dom
    render() {
        return (
            <h2>
                {
                    "Class Component - " + this.state.initialCounter
                }
            </h2>
        )
    }
}

export default Counter;
