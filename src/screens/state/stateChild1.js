import React, {useRef} from 'react';
import styles from '../context-vs-redux/context-vs-redux.module.scss'

const StateChild1 = ({incrementCounter, counter}) => {
    const renderCount = useRef(0);
    renderCount.current += 1;
    return (
        <div className={styles.item}>
            <h2 className={styles.subTitle}>Child Component 1</h2>
            <p className={styles.text}>Counter 1: {counter}</p>
            <button className={styles.button} onClick={incrementCounter}>Counter 1</button>
            <p className={styles.text}>This component has been
                rendered {renderCount.current} {renderCount.current > 1 ? "times" : "time"}</p>
        </div>
    );
};

export default StateChild1;