import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// We use a slice to define a piece of the application's state and the actions that can be performed on that state
// A slice represents a single unit of Redux state.
// It’s a collection of reducer logic and actions for a single feature in the app, typically defined together in a single file.


// Redux thunk is to handle asynchronous actions
// Axios is to handle http requests from the React App
export const postAuth = createAsyncThunk(
    // type =
    "users/postAuthData",
    // payload =
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const data = {
                email: email,
                password: password,
            };
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };
            const response = await axios.post("http://localhost:3001/api/v1/user/login", data, config);
            if(response.status === 200) {
                return { token: response.data.body.token };
            } else {
                return rejectWithValue(response.data);
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const authSlice = createSlice({
    name: "authentication",
    initialState: {
        authenticationStatus: "not active",
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
            state.authenticationStatus = "not active";
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(postAuth.pending, (state) => {
            state.authenticationStatus = "loading";
            state.isAuthenticated = false;
            state.isLoading = true;
        })
        .addCase(postAuth.fulfilled, (state, { payload }) => {
            state.authenticationStatus = "success";
            state.isAuthenticated = true;
            state.token = payload.token;
            state.isLoading = false;
        })
        .addCase(postAuth.rejected, (state) => {
            state.authenticationStatus = "failed";
            state.isAuthenticated = false;
            state.token = null;
            state.isLoading = false;
        });
    }
});

export const getUserInfos = createAsyncThunk(
    "users/getUserInformations",
    async({ token }, { rejectWithValue }) => {
        try{
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.post("http://localhost:3001/api/v1/user/profile", token, config);
            if(response.status === 200) {
                const userFirstName = response.data.body.firstName;
                const userLastName = response.data.body.lastName;
                
                return { userFirstName, userLastName };
            } else {
                return rejectWithValue(response.data);
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const changeUserInfos = createAsyncThunk(
    "users/changeUserInformations",
    async({ token, newFirstName, newLastName }, { rejectWithValue }) => {
        try{
            const data = {
                firstName: newFirstName,
                lastName: newLastName,
            };
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            }
            const response = await axios.put("http://localhost:3001/api/v1/user/profile", data, config);
            if(response.status === 200) {                
                return response.data;
            } else {
                return rejectWithValue(response.data);
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        userFirstName: "",
        userLastName: "",
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userFirstName = action.payload.userFirstName;
            state.userLastName = action.payload.userLastName;
        },
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
export const { setUserInfo, changeFirstName, changeLastName } = userSlice.actions;
export const { setAuthentication, clearAuthentication } = authSlice.actions;

// Global store = authorize to use in the reducer all the functions included in the reducers of each slice
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        auth: authSlice.reducer,
    }
});
