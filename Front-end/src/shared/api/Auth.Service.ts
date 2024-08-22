import { AxiosResponse } from 'axios'
import { api } from '.'
import { ILoginResponse, IRegister, ITokens } from './interface/auth'
import { IUser } from './interface/user'

class AuthService {
	async registration(
		login: string,
		email: string,
		password: string,
		displayName: string,
		howDid: string
	): Promise<AxiosResponse<IRegister>> {
		return api.post<IRegister>('public/signup', {
			Name: login,
			Email: email,
			Password: password,
			DisplayName: displayName,
			Howdid: howDid,
		})
	}

	async login(
		email: string,
		password: string
	): Promise<AxiosResponse<ILoginResponse>> {
		return api.post<ILoginResponse>('public/login', {
			Email: email,
			Password: password,
		})
	}

	async Refresh(): Promise<AxiosResponse<ITokens>> {
		return api.get<ITokens>('public/refresh')
	}

	async getUserData(): Promise<AxiosResponse<IUser>> {
		return api.get<IUser>('/public/data')
	}
}

export default new AuthService()
