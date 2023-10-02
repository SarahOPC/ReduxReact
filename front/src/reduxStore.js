import { configureStore, createSlice } from "@reduxjs/toolkit";

// We use a slice to define a piece of the application's state and the actions that can be performed on that state
// A slice represents a single unit of Redux state.
// It’s a collection of reducer logic and actions for a single feature in the app, typically defined together in a single file.

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        // {type: user/changeFirstName, payload: "new firstName"}
        // splice(userIndex, 1, {userFirstName: action.payload}) removes firstname at position "userIndex" one element and replace it by action.payload
        changeFirstName: (state, action) => {
            const userIndex = state.findIndex(user => user.id === "userId");
            // returns the index of the element if it's found or -1 if it's not found
            if(userIndex !== -1) {
                state.splice(userIndex, 1, {userFirstName: action.payload});
            }
        },
        // {type: user/changeLastName, payload: "new lastName"}
        // splice(userIndex, 1, {userLastName: action.payload}) removes lastname at position "userIndex" one element and replace it by action.payload
        changeLastName: (state, action) => {
            const userIndex = state.findIndex(user => user.id === "userId");
            // returns the index of the element if it's found or -1 if it's not found
            if(userIndex !== -1) {
                state.splice(userIndex, 1, {userLastName: action.payload});
            }
        },
    }
})

// action creators // Helpers to not re write every time the functions with type and payload
// Reduce risks of errors (typo, ...)
export const { changeFirstName, changeLastName } = userSlice.actions;

// Global store = authorize to use in the reducer all the functions included in the reducers of each slice
export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});
