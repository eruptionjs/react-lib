/* eslint-disable jsx-a11y/label-has-associated-control */
import { LabelHTMLAttributes } from 'react'

import styles from './styles.module.css'

function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props

  return <label className={`${className} ${styles.button}`} {...restProps} />
}

export { Label }
