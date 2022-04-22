//import styles from './AppSpace.module.css';

import TaskSpace from '../../spaces/taskSpace/TaskSpace';
import { mockTaskSpaceProps } from '../../spaces/taskSpace/TaskSpace.mocks';

export interface IAppSpace {}

const AppSpace: React.FC<IAppSpace> = () => {
  return (
    <div className="bg-secondary min-h-[86vh] p-4">
      {/* Determine Space Type and Data based on STORE */}
      <TaskSpace data={mockTaskSpaceProps.base.data} />
    </div>
  );
};

export default AppSpace;
