# Dux - a mini redux implementation

### What does redux do?

The whole point with Redux is to have one single source of truth for your application state. The state is stored as a plain Javascript object in one place: the Redux Store. The state object is read only. If you want to change the state, you need to emit an Action, which is a plain JavaScript object.

Your application can subscribe to get notified when the store has changed. When Redux is used with React, it is the React components that get notified when state changes, and can re-render based on new content in the store.

[image]

The store needs a way to know how to update the state in the store when it gets an Action. It uses a plain JavaScript function for this that Redux calls a reducer. The reducer function is passed in when the store is created.

**_3 principles of redux _**

1. **_Singel source of truth: _** The state of your whole application is stored in an object three within a single store.
2. **_State is read-only: _** The only way to change the state is to emit an action, an object describing what happend.
3. **_Changes are made with pure functions: _** To specify how the state tree is transformed by actions, you write pure reducers.

**_Rule of conduct _**

⋅⋅\* To change something in the state, you need to dispatch an action: A action is a plain javascript object that describes what happend.
⋅⋅\* We write a function called a reducer - to tie state and actions together. It is just a function that takes state and action as argumentsand returns the next state of the app.
