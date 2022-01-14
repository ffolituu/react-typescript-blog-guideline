import { FC } from 'react'
import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({ ...props }) => {
  return (
    <button type='button' className={props.attr} {...props}>
      {props.text}
    </button>
  )
}

export default Button
