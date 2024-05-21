import React, { createContext, useState, useRef } from 'react';

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const renderCountParent = useRef(0);
    renderCountParent.current += 1;

    return (
        <CounterContext.Provider value={{ counter1, setCounter1, counter2, setCounter2, renderCountParent }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterProvider;
