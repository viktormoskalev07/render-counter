import React, {useContext} from 'react';
import ContextChild1 from "@/screens/context-vs-redux/context/context-child1";
import ContextChild2 from "@/screens/context-vs-redux/context/context-child2";
import {CounterContext} from "@/provider/counter-provider";
import styles from '../context-vs-redux.module.scss'
const ContextExample = () => {
    const context = useContext(CounterContext);

    if (!context) {
        return <div>Context is not available</div>;
    }

    const { counter1, counter2, renderCountParent } = context;
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Context example</h2>
            <h3 className={styles.subTitle}>Parent Component</h3>
            <p className={styles.counter}>Counter 1: {counter1}</p>
            <p className={styles.counter}>Counter 2: {counter2}</p>
            <p className={styles.text}>This component has been
                rendered {renderCountParent.current} {renderCountParent.current > 1 ? "times" : "time"}.</p>
            <ContextChild1 />
            <ContextChild2 />
        </div>
    );
};

export default ContextExample;