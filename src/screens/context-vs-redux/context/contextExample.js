import React, {useContext, useRef} from 'react';
import ContextChild1 from "@/screens/context-vs-redux/context/contextChild1";
import ContextChild2 from "@/screens/context-vs-redux/context/contextChild2";
import {CounterContext} from "@/provider/counter-provider";
import styles from '../context-vs-redux.module.scss'
const ContextExample = () => {
    const renderCountRef = useRef(0);
    renderCountRef.current += 1;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Context example</h2>
            <h3 className={styles.subTitle}>Parent Component</h3>
            <p className={styles.text}>Parent сomponent has been
                rendered {renderCountRef.current} {renderCountRef.current > 1 ? "times" : "time"}.</p>
            <ContextChild1 />
            <ContextChild2 />
        </div>
    );
};

export default ContextExample;