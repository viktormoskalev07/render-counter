import React, { useContext, useRef } from 'react';
import { CounterContext } from "@/provider/counter-provider";
import styles from '../../state-dependencies.module.scss'
const ContextChild2 = ({style}) => {
    const context = useContext(CounterContext);

    if (!context) {
        return <div>Context is not available</div>;
    }

    const { counter2, setCounter2 } = context;
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className={styles.item}>
            <h2 className={styles.subTitle}>Child Component 2</h2>
            <p className={styles.counter}>Counter 2: {counter2}</p>
            <button className={styles.button} onClick={() => setCounter2(counter2 + 1)}>Counter 2</button>
            <p className={styles.text}>This component has been
                rendered {renderCount.current} {renderCount.current > 1 ? "times" : "time"}</p>
        </div>
    );
};

export default ContextChild2;
