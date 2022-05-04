//import styles from './TaskSpace.module.css';
import TileWrapper from '../../tiles/tileWrapper/TileWrapper';
import TaskTile from '../../tiles/taskTile/TaskTile';
import { ITaskTile } from '../../tiles/taskTile/TaskTile';

export interface ITaskSpace {
  data: Array<ITaskTile>
}

const TaskSpace: React.FC<ITaskSpace> = ({data}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
      {data.map((tile) => 
        <TileWrapper key={tile.id}>
          <TaskTile 
            title={tile.title}
            status={tile.status}
            notes={tile.notes}
            dueDate={tile.dueDate}
            timer={tile.timer}
            id={tile.id}
          />
        </TileWrapper>)}
    </div>
  )
}

export default TaskSpace;