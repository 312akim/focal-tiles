import { render, screen } from '@testing-library/react'
import AppLayout from './AppLayout';

describe('AppLayout', () => {
  it('renders text', () => {
    render(
        <AppLayout>
            <div>Google</div>
        </AppLayout>
    )

    const text = screen.getByText(/Google/i)

    expect(text).toBeInTheDocument()
  })
})