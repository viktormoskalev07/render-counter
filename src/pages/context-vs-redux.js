import React, { useContext } from 'react';
import ContextExample from "@/screens/state-dependencies/context-vs-redux/context/context-example";
import ReduxExample from "@/screens/state-dependencies/context-vs-redux/redux/reduxExample";

const ContextVsRedux = () => {
    return (
        <>
            <ContextExample />
            <ReduxExample />
        </>

    );
};

export default ContextVsRedux;
