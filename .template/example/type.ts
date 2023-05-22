import { forwardRef } from 'react'

export interface ExampleProps {
  label?: string
  onClick?: () => void
}

export interface ExampleRef {}

export type ExampleComponent = ReturnType<typeof forwardRef<ExampleRef, ExampleProps>>

export type ComponentChild = any

export interface ExampleAtom {
  (...data: Parameters<ExampleComponent>): ReturnType<ExampleComponent>
  ComponentChild: ComponentChild
}
