import React, { useContext } from 'react';
import ContextVsReduxChild1 from "@/screens/context-vs-redux/context-vs-redux-child1";
import ContextVsReduxChild2 from "@/screens/context-vs-redux/context-vs-redux-child2";
import { CounterContext } from "@/provider/counter-provider";

const ContextVsRedux = () => {
    const context = useContext(CounterContext);

    if (!context) {
        return <div>Context is not available</div>;
    }

    const { counter1, counter2, renderCountParent } = context;

    const style = {
        container: {
            display:'flex',
            flexDirection:'column',
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            lineHeight:'1.5',
        },
        item:{
            marginBottom:'0px',
        },
        button:{
            backgroundColor: 'rgba(65,0,56,0.4)',
            color:'white',
            borderRadius: '5px',
            padding: '10px 20px',
            border: 'none'
        },
        title: {
            color: '#b72455',
            fontSize: '30px',
            margin: '0 0 20px 0',
        },
        subTitle: {
            color: '#171111',
            fontSize: '25px',
            margin:'0 0 20px 0',
        },
        counter: {
            color: 'rgb(0,0,0)',
            fontSize: '20px',
            margin:'0 0 20px 0',
        },
        text: {
            color: 'rgba(37,38,38,0.6)',
            fontSize: '23px',
            margin:'0 0 20px 0',
        }
    };

    return (
        <div style={style.container} >
            <h1 style={style.title}>Context example</h1>
            <h2 style={style.subTitle}>Parent Component</h2>
            <p style={style.counter}>Counter 1: {counter1}</p>
            <p style={style.counter}>Counter 2: {counter2}</p>
            <p style={style.text}>This component has been rendered {renderCountParent.current} {renderCountParent.current>1 ? "times":"time"}.</p>
            <ContextVsReduxChild1 style={style}/>
            <ContextVsReduxChild2 style={style}/>
        </div>
    );
};

export default ContextVsRedux;
