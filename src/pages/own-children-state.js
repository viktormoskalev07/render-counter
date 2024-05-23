import React, {useRef} from 'react';
import styles from "@/screens/state-dependencies/state-dependencies.module.scss";
import OwnStateChildren1 from "@/screens/state-dependencies/own-children-state/own-state-children1";
import OwnStateChildren2 from "@/screens/state-dependencies/own-children-state/own-state-children2";

const OwnChildrenState = () => {
    const renderCountParent = useRef(0);
    renderCountParent.current += 1;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Own children state example</h2>
            <h3 className={styles.subTitle}>Parent Component</h3>
            <p className={styles.text}>Parent component has been
                rendered {renderCountParent.current} {renderCountParent.current > 1 ? "times" : "time"}.</p>
            <OwnStateChildren1/>
            <OwnStateChildren2/>
        </div>
    );
};

export default OwnChildrenState;