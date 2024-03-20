import { render } from '@redwoodjs/testing/web'

import SpendPoCLayout from './SpendPoCLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SpendPoCLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpendPoCLayout />)
    }).not.toThrow()
  })
})
