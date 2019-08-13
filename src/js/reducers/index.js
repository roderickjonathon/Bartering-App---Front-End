const initialState = {
   auth: null,
    db: null
};

// a simple reducer function which takes in the initial state
// second arg is an action, this action is a signal that is sent to the store to change the state
function rootReducer(state = initialState, action) {
    return state;
};
export default rootReducer;


//the state isn't actually changed as its immutable but instead a copy is made with the new data