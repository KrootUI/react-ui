import * as React from 'react'
import { mount } from 'enzyme'
import Avatar from './Avatar'

describe('Avatar', () => {
  it('should render without crashing', () => {
    mount(<Avatar />)
  })
})
