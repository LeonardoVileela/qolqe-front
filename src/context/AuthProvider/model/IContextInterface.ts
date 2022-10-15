import { IUserInterface } from "./IUserInterface";


export interface IContextInterface extends IUserInterface {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}