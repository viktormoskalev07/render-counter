import React, {useEffect} from 'react';
import ReduxChild1 from "@/screens/context-vs-redux/redux/reduxChild1";
import ReduxChild2 from "@/screens/context-vs-redux/redux/reduxChild2";
import  styles from '../context-vs-redux.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {incrementRenderCount} from "@/features/counter/counter";

const ReduxExample = () => {
    const counter1 = useSelector(state => state.counter.counter1);
    const counter2 = useSelector(state => state.counter.counter2);
    const dispatch = useDispatch();

    const renderCount = useSelector(state => state.counter.renderCount);

    useEffect(() => {
        dispatch(incrementRenderCount());
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Redux Example</h2>
            <h3 className={styles.subTitle}>Parent Component</h3>
            <p className={styles.counter}>Counter 1: {counter1}</p>
            <p className={styles.counter}>Counter 2: {counter2}</p>
            <p className={styles.text}>This component has been
                rendered {renderCount} {renderCount > 1 ? "times" : "time"}.</p>
            <ReduxChild1/>
            <ReduxChild2/>
        </div>
    );
};

export default ReduxExample;