import React, { useContext, useRef } from 'react';
import { CounterContext } from "@/provider/counter-provider";

const ContextVsReduxChild1 = ({style}) => {
    const context = useContext(CounterContext);

    if (!context) {
        return <div>Context is not available</div>;
    }

    const { counter1, setCounter1 } = context;
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div style={style.item}>
            <h2 style={style.subTitle}>Child Component 1</h2>
            <p style={style.counter}>Counter 1: {counter1}</p>
            <button style={style.button} onClick={() => setCounter1(counter1 + 1)}>Counter 1</button>
            <p style={style.text}>This component has been rendered {renderCount.current} times.</p>
        </div>
    );
};

export default ContextVsReduxChild1;
