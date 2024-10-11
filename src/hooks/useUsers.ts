import { useEffect, useState } from 'react'
import { IUser } from '../shared/types/user.interface'
import { useUserStore } from '../store/UserStore'

export const useUsers = () => {
	const { fetchUsers, users, isLoading, isError, filter, isSuccess } =
		useUserStore()
	const [filteredUsers, setFilteredUsers] = useState<IUser[]>([])
	useEffect(() => {
		fetchUsers()
	}, [])

	useEffect(() => {
		switch (filter) {
			case 'city':
				setFilteredUsers(
					[...users].sort((a, b) =>
						a.address.city.localeCompare(b.address.city)
					)
				)
				break
			case 'company':
				setFilteredUsers(
					[...users].sort((a, b) =>
						a.company.name.localeCompare(b.company.name)
					)
				)
				break
			default:
				break
		}
	}, [filter, users, isSuccess])

	return { filteredUsers, isLoading, isError }
}
