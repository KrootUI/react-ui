import * as React from 'react'
import { mount } from 'enzyme'
import Alert from './Alert'

describe('Alert', () => {
  it('should render without crashing', () => {
    mount(<Alert />)
  })
})
