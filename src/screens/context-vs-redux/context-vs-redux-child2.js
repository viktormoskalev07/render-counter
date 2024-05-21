import React, { useContext, useRef } from 'react';
import { CounterContext } from "@/provider/counter-provider";

const ContextVsReduxChild2 = ({style}) => {
    const context = useContext(CounterContext);

    if (!context) {
        return <div>Context is not available</div>;
    }

    const { counter2, setCounter2 } = context;
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div style={style.item}>
            <h2 style={style.subTitle}>Child Component 2</h2>
            <p style={style.counter}>Counter 2: {counter2}</p>
            <button style={style.button} onClick={() => setCounter2(counter2 + 1)}>Counter 2</button>
            <p style={style.text}>This component has been rendered {renderCount.current} times.</p>
        </div>
    );
};

export default ContextVsReduxChild2;
