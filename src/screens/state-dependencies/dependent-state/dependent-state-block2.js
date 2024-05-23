import React, {useRef, useState} from 'react';
import styles from "@/screens/state-dependencies/state-dependencies.module.scss";

const DependentStateBlock2 = () => {
    const [data, setData] = useState(10);
    const doubled = data * 2;
    const renderCount = useRef(0);

    renderCount.current += 1;

    return (
        <div className={styles.item}>
            <h2 className={styles.subTitle}>Block Two</h2>
            <p className={styles.text}>Data: {data}</p>
            <p className={styles.text}>Doubled: {doubled}</p>
            <button className={styles.button} onClick={() => setData(data + 1)}>Increment</button>
            <p className={styles.text}>This component has been
                rendered {renderCount.current} {renderCount.current > 1 ? "times" : "time"}</p>
        </div>
    );
};

export default DependentStateBlock2;