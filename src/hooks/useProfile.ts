import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUser } from '../shared/types/user.interface'
import { useUserStore } from '../store/UserStore'

interface IFormValues {
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
export const useProfile = (userId: number) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)
	const { users, fetchUsers, updateUser } = useUserStore()
	const [currentUser, setCurrentUser] = useState<IUser>()
	useEffect(() => {
		fetchUsers()
	}, [])

	useEffect(() => {
		setCurrentUser(users.find(user => user.id === userId))
	}, [users])

	useEffect(() => {
		if (isDisabled) {
			handleReset()
		}
	}, [isDisabled])

	const {
		handleSubmit,
		control,
		setValue,
		reset,
		formState: { errors },
	} = useForm<IFormValues>({
		mode: 'onChange',
		defaultValues: {
			city: '',
			comment: '',
			email: '',
			name: '',
			phone: '',
			street: '',
			userName: '',
			website: '',
			zipCode: '',
		},
	})
	useEffect(() => {
		if (currentUser) {
			handleReset()
		}
	}, [currentUser, setValue])
	const onSubmit: SubmitHandler<IFormValues> = data => {
		console.log(data)
		updateUser(data)
		setIsDisabled(true)
	}

	const handleReset = () => {
		reset({
			city: currentUser?.address.city || '',
			comment: '',
			email: currentUser?.email || '',
			name: currentUser?.name || '',
			phone: currentUser?.phone || '',
			street: currentUser?.username || '',
			userName: currentUser?.username || '',
			website: currentUser?.website || '',
			zipCode: currentUser?.address.zipcode || '',
		})
	}

	return {
		errors,
		handleSubmit,
		onSubmit,
		control,
		handleReset,
		isDisabled,
		setIsDisabled,
	}
}
