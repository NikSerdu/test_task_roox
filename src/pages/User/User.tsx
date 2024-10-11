import { FC } from 'react'
import { useParams } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'
const User: FC = () => {
	const { userId } = useParams()

	if (!userId) return null
	return (
		<>
			<Profile userId={+userId} />
		</>
	)
}

export default User
