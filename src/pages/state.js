import React, {useRef, useState} from 'react';
import StateChild2 from "@/screens/state/stateChild2";
import StateChild1 from "@/screens/state/stateChild1";
import styles from "@/screens/context-vs-redux/context-vs-redux.module.scss";

const State = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const incrementCounter1 = () => setCounter1(prevCount => prevCount + 1);
    const incrementCounter2 = () => setCounter2(prevCount => prevCount + 1);

    const renderCountParent = useRef(0);
    renderCountParent.current += 1;


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>State example</h2>
            <h3 className={styles.subTitle}>Parent Component</h3>
            <p className={styles.text}>This component has been
                rendered {renderCountParent.current} {renderCountParent.current > 1 ? "times" : "time"}.</p>
            <StateChild1 counter={counter1} incrementCounter={incrementCounter1}/>
            <StateChild2 counter={counter2} incrementCounter={incrementCounter2}/>
        </div>
    );
};

export default State;