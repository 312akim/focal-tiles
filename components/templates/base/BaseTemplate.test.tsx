import { render, screen } from '@testing-library/react'
import BaseTemplate from './BaseTemplate';

describe('BaseTemplate', () => {
  it('renders text', () => {
    render(<BaseTemplate sampleTextProp={"Google"}/>)

    const text = screen.getByText(/Google/i)

    expect(text).toBeInTheDocument()
  })
})