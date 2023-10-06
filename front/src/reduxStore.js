import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// We use a slice to define a piece of the application's state and the actions that can be performed on that state
// A slice represents a single unit of Redux state.
// It’s a collection of reducer logic and actions for a single feature in the app, typically defined together in a single file.

export const postAuth = createAsyncThunk(
    // type =
    "users/postAuthData",
    // payload =
    async (navigate, { rejectWithValue }) => {
        console.log("postAuth function called");
        try {
            console.log("postAuth try called");
            const response = await axios.post("http://localhost:3001/api/v1");
            console.log("postAuth data : ", response);
            navigate('/profile');
            return response.data;
        } catch (error) {
            console.log("postAuth error called");
            rejectWithValue(error.response.data);
        }
    }
)

const authSlice = createSlice({
    name: "authentication",
    initialState: {
        isAuthenticated: false,
        token: null,
        isLoading: false,
    },
    reducers: {
        setAuthentication: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.token = action.payload.token;
        },
        clearAuthentication: (state, action) => {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(postAuth.pending, (state) => {
            state.isAuthenticated = false;
            state.isLoading = true;
        })
        .addCase(postAuth.fulfilled, (state, { payload }) => {
            state.isAuthenticated = true;
            state.token = payload.token;
            state.isLoading = false;
        })
        .addCase(postAuth.rejected, (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.isLoading = false;
        });
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        // {type: user/changeFirstName, payload: "new firstName"}
        // splice(userIndex, 1, {userFirstName: action.payload}) removes
        // firstname at position "userIndex" one element and replace it by action.payload
        changeFirstName: (state, action) => {
            const userIndex = state.findIndex(user => user.id === "userId");
            // returns the index of the element if it's found or -1 if it's not found
            if(userIndex !== -1) {
                state.splice(userIndex, 1, {userFirstName: action.payload});
            }
        },
        // {type: user/changeLastName, payload: "new lastName"}
        // splice(userIndex, 1, {userLastName: action.payload}) removes
        // lastname at position "userIndex" one element and replace it by action.payload
        changeLastName: (state, action) => {
            const userIndex = state.findIndex(user => user.id === "userId");
            // returns the index of the element if it's found or -1 if it's not found
            if(userIndex !== -1) {
                state.splice(userIndex, 1, {userLastName: action.payload});
            }
        },
    }
});

// action creators
// Helpers to not re write every time the functions with type and payload
// Reduce risks of errors (typo, ...)
export const { changeFirstName, changeLastName } = userSlice.actions;
export const { setAuthentication, clearAuthentication } = authSlice.actions;

// Global store = authorize to use in the reducer all the functions included in the reducers of each slice
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        auth: authSlice.reducer,
    }
});
