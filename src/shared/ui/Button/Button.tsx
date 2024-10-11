import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IProps>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={cn(styles.btn, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
