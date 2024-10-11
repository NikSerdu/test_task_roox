import { FC } from 'react'
import Button from '../../shared/ui/Button/Button'
import { useUserStore } from '../../store/UserStore'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	const { setFilter } = useUserStore()
	return (
		<div className={styles.sidebar}>
			<h2>Сортировка</h2>
			<Button onClick={() => setFilter('city')}>по городу</Button>
			<Button onClick={() => setFilter('company')}>по компании</Button>
		</div>
	)
}

export default Sidebar
