import React, { createContext, useState, useEffect } from "react";
import { IContextInterface } from "../model/IContextInterface";
import { IAuthProviderInteface } from "../model/IAuthProviderInteface";
import { IUserInterface } from "../model/IUserInterface";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "../model/util";

export const AuthContext = createContext<IContextInterface>({} as IContextInterface);

export const AuthProvider = ({ children }: IAuthProviderInteface) => {

    const [user, setUser] = useState<IUserInterface | null>();

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, [])



    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);

        const payload = { token: response.token, email }

        setUser(payload);
        setUserLocalStorage(payload);

    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}