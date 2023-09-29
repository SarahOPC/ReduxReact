import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [
        {id: "userId", userFirstName: "userFirstName", userLastName: "userLastName"},
        // should have the element from the database ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    ],
    reducers: {
        changeFirstName: (state, action) => {
            // {type: user/changeFirstName, payload: "new firstName"}
            // splice(userIndex, 1, {userFirstName: action.payload}) removes firstname at position "userIndex" one element and replace it by action.payload
            const userIndex = state.findIndex(user => user.id === "userId");
            if(userIndex !== -1) { //returns the index of the element if it's found or -1 if it's not found
                state.splice(userIndex, 1, {userFirstName: action.payload});
            }
        },
        changeLastName: (state, action) => {
            // {type: user/changeLastName, payload: "new lastName"}
            // splice(userIndex, 1, {userLastName: action.payload}) removes lastname at position "userIndex" one element and replace it by action.payload
            const userIndex = state.findIndex(user => user.id === "userId");
            if(userIndex !== -1) { //returns the index of the element if it's found or -1 if it's not found
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
