import React from 'react'
import { render } from '@testing-library/react'
import TestUI from './TestUI'

describe('TestUI Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<TestUI />)
    expect(asFragment()).toMatchSnapshot()
  })
})
