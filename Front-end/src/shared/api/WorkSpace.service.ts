import { AxiosResponse } from 'axios'
import { api } from '.'
import { IWorkSpaceResponse } from './interface/workspace'

class WorkSpaceService {
	async Get(userID: string): Promise<AxiosResponse<IWorkSpaceResponse>> {
		return api.get<IWorkSpaceResponse>(`/workspace/getSpaces/${userID}`)
	}

	async Delete(id: string) {
		return api.delete(`/workspace/deleteSpace/${id}`)
	}

	async Create(
		userID: string,
		Title: string,
		Description: string,
		Color: string
	) {
		return api.post('/workspace/createSpace', {
			key: userID,
			description: Description,
			title: Title,
			logoColor: Color,
		})
	}
}

export default new WorkSpaceService()
