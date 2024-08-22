export interface IWorkSpace {
	ID: string
	title: string
	description: string
	logoColor: string
}

export interface IWorkSpaceResponse {
	WorkSpaces: IWorkSpace[]
}
