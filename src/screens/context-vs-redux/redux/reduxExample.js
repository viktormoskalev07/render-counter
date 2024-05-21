import React, {useRef} from 'react';
import ReduxChild1 from "@/screens/context-vs-redux/redux/reduxChild1";
import ReduxChild2 from "@/screens/context-vs-redux/redux/reduxChild2";
import styles from '../context-vs-redux.module.scss';

const ReduxExample = () => {
    const renderCountRef = useRef(0);
    renderCountRef.current += 1;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Redux Example</h2>
            <h3 className={styles.subTitle}>Parent Component</h3>
            <p className={styles.text}>Parent сomponent has been
                rendered {renderCountRef.current} {renderCountRef.current > 1 ? "times" : "time"}.</p>
            <ReduxChild1/>
            <ReduxChild2/>
        </div>
    );
};

export default ReduxExample;