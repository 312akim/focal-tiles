import { render, screen } from '@testing-library/react';
import TaskSpace from './TaskSpace';
import { mockTaskSpaceProps } from './TaskSpace.mocks';

describe('TaskSpace', () => {
  it('renders text from a task tile passed in data props', () => {
    render(<TaskSpace data={mockTaskSpaceProps.base.data} />);

    const text = screen.getByText(/Complete/i);

    expect(text).toBeInTheDocument();
  });
});
