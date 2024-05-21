import React, { useContext } from 'react';
import ContextExample from "@/screens/context-vs-redux/context/contextExample";
import ReduxExample from "@/screens/context-vs-redux/redux/reduxExample";

const ContextVsRedux = () => {
    return (
        <>
            <ContextExample />
            <ReduxExample />
        </>

    );
};

export default ContextVsRedux;
