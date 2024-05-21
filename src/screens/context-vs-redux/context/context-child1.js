import React, { useContext, useRef } from 'react';
import { CounterContext } from "@/provider/counter-provider";
import styles from '../context-vs-redux.module.scss'

const ContextChild1 = ({style}) => {
    const context = useContext(CounterContext);

    if (!context) {
        return <div>Context is not available</div>;
    }

    const { counter1, setCounter1 } = context;
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className={styles.item}>
            <h2 className={styles.subTitle}>Child Component 1</h2>
            <p className={styles.counter}>Counter 1: {counter1}</p>
            <button className={styles.button} onClick={() => setCounter1(counter1 + 1)}>Counter 1</button>
            <p className={styles.text}>This component has been rendered {renderCount.current} times.</p>
        </div>
    );
};

export default ContextChild1;
