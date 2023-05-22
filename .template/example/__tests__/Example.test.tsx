import { render, fireEvent } from '@testing-library/react'
import { Example } from '..'
import React from 'react'
require('@testing-library/jest-dom')

describe('Example', () => {
  it('renders label', () => {
    const label = 'Click me'
    const { getByText } = render(<Example label={label} />)
    expect(getByText(label)).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Example label="Click me" onClick={onClick} />)
    fireEvent.click(getByText('Click me'))
    expect(onClick).toHaveBeenCalled()
  })
})
