// Mock props to test interface props
import { ITaskSpace } from './TaskSpace';

const base: ITaskSpace = {
  data: [
    {
      title: 'Title 1',
      status: 'Started',
      notes: 'Note 1',
      dueDate: '05/11/22',
      timer: 6625,
    },
    {
      title: 'Title 2',
      status: 'Blocked',
      notes: 'Note 2',
      dueDate: '05/22/22',
      timer: 6625,
    },
    {
      title: 'Title 3',
      status: 'Complete',
      notes: 'Note 3',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 4',
      status: 'Blocked',
      notes: 'Note 4',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 5',
      status: 'Blocked',
      notes: 'Note 5',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 6',
      status: 'Blocked',
      notes: 'Note 6',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 7',
      status: 'Blocked',
      notes: 'Note 7',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 8',
      status: 'Blocked',
      notes: 'Note 8',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 9',
      status: 'Blocked',
      notes: 'Note 9',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 10',
      status: 'Blocked',
      notes: 'Note 10',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 11',
      status: 'Blocked',
      notes: 'Note 11',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 12',
      status: 'Blocked',
      notes: 'Note 12',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 13',
      status: 'Blocked',
      notes: 'Note 13',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 14',
      status: 'Blocked',
      notes: 'Note 14',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 15',
      status: 'Blocked',
      notes: 'Note 15',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 16',
      status: 'Blocked',
      notes: 'Note 16',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 17',
      status: 'Blocked',
      notes: 'Note 17',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 18',
      status: 'Blocked',
      notes: 'Note 18',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 19',
      status: 'Blocked',
      notes: 'Note 19',
      dueDate: '06/03/22',
      timer: 6625,
    },
    {
      title: 'Title 20',
      status: 'Blocked',
      notes: 'Note 20',
      dueDate: '06/03/22',
      timer: 6625,
    },
  ],
};

const alt: ITaskSpace = {
  data: [],
};

export const mockTaskSpaceProps = {
  base,
  alt,
};
