import { FC } from 'react'
import { Trans } from 'react-i18next'

export const Button: FC<{ children?: any; onClick?: () => void }> = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  )
}
