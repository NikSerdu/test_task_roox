import { FC } from 'react'
import { useUsers } from '../../hooks/useUsers'
import { IUser } from '../../shared/types/user.interface'
import UserCard from './UserCard/UserCard'
import styles from './UserList.module.scss'
interface IProps {
	users: IUser[]
}

const UserList: FC<IProps> = ({ users }) => {
	const { isLoading } = useUsers()

	if (isLoading) {
		return 'Загрузка...'
	}
	return (
		<div className={styles['user-list']}>
			<h1>Список пользователей</h1>
			<div className={styles['user-list__data']}>
				{users.map(user => (
					<UserCard user={user} key={user.id + user.name} />
				))}
			</div>
			<div className={styles['user-list__length']}>
				Найдено {users.length} пользователей
			</div>
		</div>
	)
}

export default UserList
