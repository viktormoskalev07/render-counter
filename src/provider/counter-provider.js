import React, { createContext, useState, useRef } from 'react';

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    return (
        <CounterContext.Provider value={{ counter1, setCounter1, counter2, setCounter2, }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterProvider;
