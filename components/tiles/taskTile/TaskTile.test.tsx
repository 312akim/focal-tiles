import { render, screen } from '@testing-library/react';
import { secondsToTime } from '../../../lib/secondsToTime';
import TaskTile, { StatusMenu } from './TaskTile';

describe('TaskTile', () => {
  it('renders a title, a due date, and 2 buttons', () => {
    render(<TaskTile title={"Debug Price Estimate"} status={"Ongoing"} notes={"None"} dueDate={"12/12/23"} timer={6255} />);
    const convertedTime = secondsToTime(6255);

    const titleText = screen.getByText(/Debug Price Estimate/);
    const dueDateText = screen.getByText(/12\/12\/23/);
    const statusText = screen.getAllByText(/Ongoing/)[0];
    const timerText = screen.getByText(convertedTime);

    expect(titleText).toBeInTheDocument();
    expect(dueDateText).toBeInTheDocument();
    expect(statusText).toBeInTheDocument();
    expect(timerText).toBeInTheDocument();
  });
});

describe('StatusMenu', () => {
  it('renders all of the different possible statuses', () => {
    const statusOptions = ["New", "Started", "Ongoing", "Blocked", "Complete"]
    render(<StatusMenu showStatus={true} status={"Blocked"} clickHandler={() => true} menuItems={statusOptions}/>)

    const newStatus = screen.getByText("New");
    const startedStatus = screen.getByText("Started");
    const ongoingStatus = screen.getByText("Ongoing");
    const blockedStatus = screen.getByText("Blocked");
    const completeStatus = screen.getByText("Complete");

    expect(newStatus).toBeInTheDocument();
    expect(startedStatus).toBeInTheDocument();
    expect(ongoingStatus).toBeInTheDocument();
    expect(blockedStatus).toBeInTheDocument();
    expect(completeStatus).toBeInTheDocument();
  })
})