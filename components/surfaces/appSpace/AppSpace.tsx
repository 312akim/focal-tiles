//import styles from './AppSpace.module.css';

import { useSelector } from 'react-redux';
import { selectAppSelectedSpaceIndex, selectAppSpaces } from '../../../app/appSlice';
import TaskSpace from '../../spaces/taskSpace/TaskSpace';

export interface IAppSpace {}

const AppSpace: React.FC<IAppSpace> = () => {
  const selectedSpaceIndex = useSelector(selectAppSelectedSpaceIndex);
  const spaces = useSelector(selectAppSpaces);

  return (
    <div className="bg-secondary min-h-[86vh] md:p-6">
      <TaskSpace data={spaces[selectedSpaceIndex].tiles} />
    </div>
  );
};

export default AppSpace;
