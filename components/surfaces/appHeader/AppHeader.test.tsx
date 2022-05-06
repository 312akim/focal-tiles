import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
  it('renders text', () => {
    render(
      <Provider store={store}>
        <AppHeader auth={true} />
      </Provider>
    );

    const text = screen.getByText(/Space/i);

    expect(text).toBeInTheDocument();
  });
});
