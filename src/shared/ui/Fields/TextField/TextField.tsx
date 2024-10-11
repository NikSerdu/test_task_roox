import cn from 'clsx'
import { FC, forwardRef, InputHTMLAttributes } from 'react'
import styles from './TextField.module.scss'
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string
	isValid?: boolean
}

const TextField: FC<IProps> = forwardRef<HTMLInputElement, IProps>(
	({ title, isValid = true, ...rest }, ref) => {
		return (
			<label className={styles.text_field}>
				<span>{title}</span>
				<input
					type='text'
					{...rest}
					ref={ref}
					className={cn({
						[styles.invalid]: !isValid,
					})}
				/>
			</label>
		)
	}
)

export default TextField
