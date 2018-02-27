/**
 * Mini redux implementation:
 * We need to be able to do three things with our store:
 *  1. Get the current state of the store
 *  2. Dispatch an action, which is passed as an argument to the reducer to update the state in the store.
 *  3. Listen when the store changes it state.
 */

function createStore(reducer, initialState) {
  var currentReducer = reducer;
  var currentState = initialState;
  var listener = () => {};

  return {
    getState() {
      return currentState;
    },
    dispatch(action) {
      currentState = currentReducer(currentState, action);
      listener();
      return action;
    },
    subscribe(newListner) {
      listener = newListner;
    }
  };
}

/** Counter reducer */
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

/** Create your store with the counter redux*/
let store = createStore(counter);

/** Subscribe to your store */
store.subscribe(() => console.log(store.getState()));

/** Dispatch actions to the store */
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
