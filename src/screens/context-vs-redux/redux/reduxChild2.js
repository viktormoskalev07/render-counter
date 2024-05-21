import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incrementCounter2} from "@/features/counter/counter";
import styles from "@/screens/context-vs-redux/context-vs-redux.module.scss";

const ReduxChild2 = () => {
    const counter2 = useSelector(state => state.counter.counter2);
    const dispatch = useDispatch();

    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div>
            <h2>Child Component 2</h2>
            <p>Counter 2: {counter2}</p>
            <button className={styles.button} onClick={() => dispatch(incrementCounter2())}>Counter 2</button>

            <p className={styles.text}>This component has been
                rendered {renderCount.current} {renderCount.current > 1 ? "times" : "time"}</p>
        </div>
    );
};

export default ReduxChild2;
