# Dux - a mini redux implementation

### What does redux do?

The whole point with Redux is to have one single source of truth for your application state. The state is stored as a plain Javascript object in one place: the Redux Store. The state object is read only. If you want to change the state, you need to emit an Action, which is a plain JavaScript object.

Your application can subscribe to get notified when the store has changed. When Redux is used with React, it is the React components that get notified when state changes, and can re-render based on new content in the store.

![Redux](https://i.imgur.com/5kc68ZM.png "Redux")


The store needs a way to know how to update the state in the store when it gets an Action. It uses a plain JavaScript function for this that Redux calls a reducer. The reducer function is passed in when the store is created.

**3 principles of redux**

1. **Singel source of truth:** The state of your whole application is stored in an object three within a single store.
2. **State is read-only:** The only way to change the state is to emit an action, an object describing what happend.
3. **Changes are made with pure functions:** To specify how the state tree is transformed by actions, you write pure reducers.

**Rule of conduct**

* To change something in the state, you need to dispatch an action: A action is a plain javascript object that describes what happend.
* We write a function called a reducer - to tie state and actions together. It is just a function that takes state and action as argumentsand returns the next state of the app.

**Dux code**
```javascript

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

```
