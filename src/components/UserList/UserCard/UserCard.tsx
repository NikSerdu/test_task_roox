import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { IUser } from '../../../shared/types/user.interface'
import styles from './UserCard.module.scss'

interface IProps {
	user: IUser
}

const UserCard: FC<IProps> = ({ user: { address, company, name, id } }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__info}>
				<p>
					<span>ФИО: </span>
					{name}
				</p>
				<p>
					<span>Город: </span>
					{address.street}
				</p>
				<p>
					<span>Компания: </span>
					{company.name}
				</p>
			</div>
			<div className={styles.card__more}>
				<NavLink to={`user/${id}`}>Подробнее</NavLink>
			</div>
		</div>
	)
}

export default UserCard
