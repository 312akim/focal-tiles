import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SpacePicker from './SpacePicker';
import { store } from '../../../app/store';

describe('SpacePicker', () => {
  it('renders the Space Picker header', () => {
    render(
      <Provider store={store}>
        <SpacePicker />
      </Provider>
    );

    const text = screen.getByText(/Space/i);

    expect(text).toBeInTheDocument();
  });
});
