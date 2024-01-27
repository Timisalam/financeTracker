import { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext()


//takes in current state and an action to determine next state
export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }
        default:
            return state
    }
}


export const ThemeContextProvider = ({ children }) => {
    //initial state 
    const [state, dispatch] = useReducer(themeReducer, { color: '#249c6b', mode: 'dark' })


    //dispatches action
    const changeColour = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }


    return (
        <ThemeContext.Provider value={{ ...state, changeColour, changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}