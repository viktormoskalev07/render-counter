const initialState = {
    counter1: 0,
    counter2: 0,
    renderCount: 0,

};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER_1':
            return {
                ...state,
                counter1: state.counter1 + 1
            };
        case 'INCREMENT_COUNTER_2':
            return {
                ...state,
                counter2: state.counter2 + 1
            };
        case 'INCREMENT_RENDER_COUNT':
            return { ...state,
                renderCount: state.renderCount + 1 };
        default:
            return state;
    }
};

export default counterReducer;
