import { useState, createContext } from 'react'

export const  AuthContext = createContext({ user: undefined, login: () => {}, logout: () => { }})

export function AuthProvider({ children }) {
    const [ auth, setAuth ] = useState(null)

    const login = (userData) => {
        setAuth(userData)
    }

    const logout = () => {
        setAuth(null)
    }

    const valueContext = { auth, login, logout }

    return (
        <AuthContext.Provider value= { valueContext }>
            { children }
        </AuthContext.Provider>
    )
}
