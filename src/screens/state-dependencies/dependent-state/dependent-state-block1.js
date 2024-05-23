import React, {useEffect, useRef, useState} from 'react';
import styles from "@/screens/state-dependencies/state-dependencies.module.scss";

const DependentStateBlock1 = () => {
    const [data, setData] = useState(10);
    const [doubled, setDoubled] = useState(0);
    const renderCount = useRef(0);
    renderCount.current += 1;

    useEffect(() => {
        setDoubled(data * 2);
    }, [data]);

    return (
        <div className={styles.item}>
            <h2 className={styles.subTitle}>Block One</h2>
            <p className={styles.text}>Data: {data}</p>
            <p className={styles.text}>Doubled: {doubled}</p>
            <button className={styles.button} onClick={() => setData(data + 1)}>Increment</button>
            <p className={styles.text}>This component has been
                rendered {renderCount.current} {renderCount.current > 1 ? "times" : "time"}</p>
        </div>
    );
};

export default DependentStateBlock1;