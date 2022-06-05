import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import TaskSpace from './TaskSpace';
import { mockTaskSpaceProps } from './TaskSpace.mocks';

describe('TaskSpace', () => {
  it('renders text from a task tile passed in data props', () => {
    render(
      <Provider store={store}>
        <TaskSpace data={mockTaskSpaceProps.base.data} />
      </Provider>
    );

    const text = screen.getAllByText(/Complete/i)[0];

    expect(text).toBeInTheDocument();
  });
});