import { IUser } from '../../../shared/api/interface/user'



export interface IUserStore {
    user: IUser
    isAuth: boolean
    login: (email: string, password: string) => void
    refresh: () => void
    /*registration: (login: string, email: string, password: string) => void
    logout: () => void*/
}