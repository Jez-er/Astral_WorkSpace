import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import AuthService from '../../shared/api/AuthService'
import { IUser } from '../../shared/api/interface/user'
import { IUserStore } from './interface/User'


export const useUserStore = create<IUserStore>()(persist((set) => ({
    user: {} as IUser,
    isAuth: false,
    login: async (email: string, password: string) => {
            const responseLogin = await AuthService.login(email, password);
        localStorage.setItem('session', responseLogin.data.Tokens.Token);
        set(() => ({
            isAuth: true,
            user: responseLogin.data.UserData,
        }));
    },
    refresh: async () => {
        const response = await AuthService.Refresh();
    localStorage.setItem('session', response.data.Token)
    }
    /*registration: async (login: string, email: string, password: string) => {
        try {
            const response = await AuthService.registration(login, email, password);
            localStorage.setItem('token', response.data.refreshToken);
            set(() => ({
                user: response.data.User,
                isAuth: true
            }));
        } catch (e) {
            console.log(e);
        }
    },
    logout: async () => {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            set(() => ({
                user: {} as IUser,
                isAuth: false
            }));
        } catch (e) {
            console.log(e);
        }
    },*/
}), {
    name: 'userStore'
}));