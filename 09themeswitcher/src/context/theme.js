import {createContext, useContext} from "react"

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: ()=>{},

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

// Here we did all the Context work in one file instead of two
// - as we did in 08miniContext project i.e. Usecontext- one file and then UseContextProvider - other file