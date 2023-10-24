import { ButtonHTMLAttributes } from 'react'

import styles from './styles.module.css'

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props

  return <button className={`${className} ${styles.button}`} {...restProps} />
}

export { Button }
