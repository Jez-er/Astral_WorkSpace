import { IUser } from './user'

export interface IRegister {
	Name: string
	Email: string
	Password: string
	DisplayName: string
	Howdid: string
}

export interface ITokens {
	RefreshToken: string,
  Token: string
}

export interface ILoginResponse {
	Tokens: ITokens
	UserData: IUser
}