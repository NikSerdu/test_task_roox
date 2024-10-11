import { instance } from '../api/api.instance'
import { IUser } from '../shared/types/user.interface'

export const UserService = {
	async getUsers() {
		const response = await instance<IUser[]>({
			url: `/users`,
			method: 'GET',
		})
		return response.data
	},
}
