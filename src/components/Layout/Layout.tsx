import { FC, PropsWithChildren } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.scss'
const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Sidebar />
			{children}
		</div>
	)
}

export default Layout
