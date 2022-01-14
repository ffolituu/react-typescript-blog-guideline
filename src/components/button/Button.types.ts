import { MouseEventHandler } from 'react'
export interface ButtonProps {
  text: string
  attr: string // Define attr className -> ex : btn btn-sm bt-outline-primary
  onClick?: MouseEventHandler<HTMLButtonElement>
}
