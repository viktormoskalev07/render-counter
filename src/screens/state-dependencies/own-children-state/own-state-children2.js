import React, {useRef, useState} from 'react';
import styles from "@/screens/state-dependencies/state-dependencies.module.scss";

const OwnStateChildren2 = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className={styles.item}>
            <h2 className={styles.subTitle}>Child Component 2</h2>
            <p className={styles.text}>Counter 2: {counter}</p>
            <button className={styles.button} onClick={incrementCounter}>Counter 1</button>
            <p className={styles.text}>This component has been
                rendered {renderCount.current} {renderCount.current > 1 ? "times" : "time"}</p>
        </div>
    );
};

export default OwnStateChildren2;