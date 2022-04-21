import { render, screen } from '@testing-library/react';
import TaskSpace from '../../spaces/taskSpace/TaskSpace';
import { mockTaskSpaceProps } from '../../spaces/taskSpace/TaskSpace.mocks';
import AppSpace from './AppSpace';

describe('AppSpace', () => {
  it('renders a task space child node with text from a task tile', () => {
    render(<AppSpace><TaskSpace data={mockTaskSpaceProps.base.data} /></AppSpace>);

    const text = screen.getByText(/Complete/i);

    expect(text).toBeInTheDocument();
  });
});
