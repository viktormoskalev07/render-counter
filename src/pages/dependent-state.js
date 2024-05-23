import styles from "@/screens/state-dependencies/state-dependencies.module.scss"
import DependentStateBlock1 from "@/screens/state-dependencies/dependent-state/dependent-state-block1";
import DependentStateBlock2 from "@/screens/state-dependencies/dependent-state/dependent-state-block2";

const DependentState = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Dependent state example</h2>
            <DependentStateBlock1/>
            <DependentStateBlock2/>
        </div>
    );
};

export default DependentState;