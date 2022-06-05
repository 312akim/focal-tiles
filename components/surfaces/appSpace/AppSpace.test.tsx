import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import AppSpace from './AppSpace';

describe('AppSpace', () => {
  it('renders a task space child node with text from a task tile', () => {
    render(
      <Provider store={store}>
        <AppSpace />
      </Provider>
    );

    const text = screen.getAllByText(/Complete/i)[0];

    expect(text).toBeInTheDocument();
  });
});
