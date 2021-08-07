import * as React from 'react'
import { mount } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  it('should render without crashing', () => {
    mount(<Button size="normal" />)
  })
})