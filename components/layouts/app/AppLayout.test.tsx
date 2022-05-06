import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import AppLayout from './AppLayout';

describe('AppLayout', () => {
  it('renders text', () => {
    render(
      <Provider store={store}>
        <AppLayout>
            <div>Google</div>
        </AppLayout>
      </Provider>
    )

    const text = screen.getByText(/Google/i)

    expect(text).toBeInTheDocument()
  })
})