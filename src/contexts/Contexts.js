import React, { createContext } from 'react'

const UserContext = createContext()
const MessagesContext = createContext()
const ThemeContext = createContext()

ThemeContext.displayName = 'Theme'
MessagesContext.displayName = 'Messages'
UserContext.displayName = 'User'

const ThemeProvider = ({ children, value }) => {
    return (
        <ThemeContext.Provider value={value}>
            { children}
        </ThemeContext.Provider>
    )
}
const UserProvider = ({ children, value }) => {
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
const MessagesProvider = ({ children, value }) => {
    return (
        <MessagesContext.Provider value={value}>
            {children}
        </MessagesContext.Provider>
    )
}
export {
    UserProvider,
    UserContext,
    MessagesProvider,
    MessagesContext,
    ThemeProvider,
    ThemeContext
}
