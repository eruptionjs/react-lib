import { InputHTMLAttributes } from 'react'

import styles from './styles.module.css'

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...restProps } = props

  return <input className={`${className} ${styles.button}`} {...restProps} />
}

export { Input }
