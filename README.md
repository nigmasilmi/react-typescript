# Redux + TS

## Dependencies needed

`npm i @types/react-redux axios react-redux redux redux-thunk`

## Redux store design

- It is really recommended to think about the design first
- Study the data that we are going to work with
- Define which pieces of states the Reducer is going to manage
- Define the actions and action types needed
- Define the action creator needed
- Define a single entry point for all the redux files/pieces/etc

## Reducer setup

1. Define the reducer with its state and action types
2. Add return type to the reducer
3. Remember that actions not always have a payload, take this into account when designing their interface
4. Better yet, define types separately for each action
5. Define a type with union statements to pack all the checking logic for action types
6. To handle the strings for actions, define an enum
