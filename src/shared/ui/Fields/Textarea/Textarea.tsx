import { FC, forwardRef, TextareaHTMLAttributes } from 'react'
import styles from './Textarea.module.scss'
interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	title: string
}

const Textarea: FC<IProps> = forwardRef<HTMLTextAreaElement, IProps>(
	({ title, ...rest }, ref) => {
		return (
			<label className={styles.text_field}>
				<span>{title}</span>
				<textarea {...rest} ref={ref} />
			</label>
		)
	}
)

export default Textarea
