import React, { createContext, useState } from "react";
import { IContextInterface } from "../model/IContextInterface";
import { IAuthProviderInteface } from "../model/IAuthProviderInteface";
import { IUserInterface } from "../model/IUserInterface";
import { LoginRequest } from "../model/util";

export const AuthContext = createContext<IContextInterface>({} as IContextInterface);

export const AuthProvider = ({ children }: IAuthProviderInteface) => {

    const [user, setUser] = useState<IUserInterface | null>();

    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);

    }

    function logout() {

    }

    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
        {children}
    </AuthContext.Provider>
}