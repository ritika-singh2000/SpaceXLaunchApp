import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loggedInUser: null,
  currentState: "SIGN_UP",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        users: [...state.users, action.payload],
        currentState: "LOG_IN",
      };
    case "LOG_IN":
      return {
        ...state,
        loggedInUser: action.payload,
        currentState: "AUTHENTICATED",
      };
    case "LOG_OUT":
      return {
        ...state,
        loggedInUser: null,
        currentState: "SIGN_UP",
      };

    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export default store;
