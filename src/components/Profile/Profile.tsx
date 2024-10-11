import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { useProfile } from '../../hooks/useProfile'
import Button from '../../shared/ui/Button/Button'
import TextField from '../../shared/ui/Fields/TextField/TextField'
import Textarea from '../../shared/ui/Fields/Textarea/Textarea'
import styles from './Profile.module.scss'
interface IProps {
	userId: number
}

const Profile: FC<IProps> = ({ userId }) => {
	const { errors, handleSubmit, onSubmit, control, isDisabled, setIsDisabled } =
		useProfile(userId)

	return (
		<div className={styles.profile}>
			<div className=''>
				<h2>Профиль пользователя</h2>
				<Button onClick={() => setIsDisabled(prev => !prev)}>
					{isDisabled ? 'Редактировать' : 'Отмена'}
				</Button>
			</div>
			<form className={styles.group} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='name'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field }) => (
						<TextField
							title='Name'
							disabled={isDisabled}
							{...field}
							isValid={!errors.name}
						/>
					)}
				/>
				<Controller
					name='userName'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field }) => (
						<TextField
							title='User name'
							disabled={isDisabled}
							{...field}
							isValid={!errors.userName}
						/>
					)}
				/>

				<Controller
					name='email'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field }) => (
						<TextField
							title='Email'
							disabled={isDisabled}
							{...field}
							isValid={!errors.email}
						/>
					)}
				/>

				<Controller
					name='street'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field }) => (
						<TextField
							title='Street'
							disabled={isDisabled}
							{...field}
							isValid={!errors.street}
						/>
					)}
				/>

				<Controller
					name='city'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field }) => (
						<TextField
							title='City'
							disabled={isDisabled}
							{...field}
							isValid={!errors.city}
						/>
					)}
				/>

				<Controller
					name='zipCode'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field }) => (
						<TextField
							title='Zip code'
							disabled={isDisabled}
							{...field}
							isValid={!errors.zipCode}
						/>
					)}
				/>

				<Controller
					name='phone'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field }) => (
						<TextField
							title='Phone'
							disabled={isDisabled}
							{...field}
							isValid={!errors.phone}
						/>
					)}
				/>

				<Controller
					name='website'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field }) => (
						<TextField
							title='Website'
							disabled={isDisabled}
							{...field}
							isValid={!errors.website}
						/>
					)}
				/>
				<Controller
					name='comment'
					control={control}
					render={({ field }) => (
						<Textarea
							title='Comment'
							rows={4}
							disabled={isDisabled}
							{...field}
						/>
					)}
				/>
				<Button
					type='submit'
					disabled={isDisabled || Object.keys(errors).length !== 0}
				>
					Отправить
				</Button>
			</form>
		</div>
	)
}

export default Profile
