import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incrementCounter1} from "@/features/counter/counter";
import styles from "@/screens/context-vs-redux/context-vs-redux.module.scss";


const ReduxChild1 = () => {
    const counter1 = useSelector(state => state.counter.counter1);
    const dispatch = useDispatch();

    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div>
            <h2>Child Component 1</h2>
            <p>Counter 1: {counter1}</p>
            <button className={styles.button} onClick={() => dispatch(incrementCounter1())}>Counter 1</button>
            <p className={styles.text}>This component has been
                rendered {renderCount.current} {renderCount.current > 1 ? "times" : "time"}</p>
        </div>
    );
};

export default ReduxChild1;
