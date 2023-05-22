import { forwardRef } from 'react'
import { ExampleAtom, ExampleComponent } from './type'

const Com: ExampleComponent = forwardRef((props, ref) => {
  return <div onClick={props.onClick}>{props.label}</div>
})

export const Example: ExampleAtom = Com as unknown as ExampleAtom
Example.ComponentChild = {}

export default Example
