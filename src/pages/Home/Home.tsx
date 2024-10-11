import { FC } from 'react'
import UserList from '../../components/UserList/UserList'
import { useUsers } from '../../hooks/useUsers'

const Home: FC = () => {
	const { filteredUsers, isError } = useUsers()

	if (isError) {
		return 'Что-то пошло не так'
	}
	return <>{filteredUsers.length > 0 && <UserList users={filteredUsers} />}</>
}

export default Home
