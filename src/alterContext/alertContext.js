import React, { createContext, useContext, useReducer } from "react";
export const AlertContext = createContext();

export const AltContext = () => {
    return useContext(AlertContext);
};

export const defaultState = {
    alertState: {
        open: false,
        message: "",
        type: "info"
    }
};

export const Reduser = (state, action) => {
    switch (action.type) {
        case action.type:
            return {
                ...state,
                [action?.type]: { ...state[action.type], ...action.payload }
            };
        default:
            return state;
    }
};

const AlertContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reduser, defaultState);
    const setAlert = (type, message) => {
        dispatch({
            type: "alertState",
            payload: { open: true, message: message, type: type }
        });
    };

    return (
        <AlertContext.Provider value={{ setAlert, state, dispatch }}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertContextProvider;
