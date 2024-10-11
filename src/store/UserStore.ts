import { create } from 'zustand'
import { UserService } from '../services/user.service'
import { IUser } from '../shared/types/user.interface'

interface IUserUpdateData {
	name: string
	userName: string
	email: string
	street: string
	city: string
	zipCode: string
	phone: string
	website: string
	comment: string
}

interface UserState {
	users: IUser[]
	fetchUsers: () => Promise<void>
	isSuccess: boolean
	isError: boolean
	isLoading: boolean
	filter: 'city' | 'company'
	setFilter: (filter: 'city' | 'company') => void
	updateUserData: IUserUpdateData | null
	updateUser: (data: IUserUpdateData) => void
}

export const useUserStore = create<UserState>(set => ({
	users: [],
	filter: 'city',
	isSuccess: false,
	isError: false,
	isLoading: false,
	updateUserData: null,
	fetchUsers: async () => {
		set({ isLoading: true })
		try {
			const response = await UserService.getUsers()
			set({ users: response, isSuccess: true })
		} catch (error) {
			set({ isError: true })
		}
		set({ isLoading: false })
	},
	setFilter: (filter: 'city' | 'company') => {
		set({ filter })
	},
	updateUser: data => {
		set({ updateUserData: data })
	},
}))
