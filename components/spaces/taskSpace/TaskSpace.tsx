//import styles from './TaskSpace.module.css';
import TileWrapper from '../../tiles/tileWrapper/TileWrapper';


export interface ITaskSpace {
  data: Array<ITaskTile>
}

interface ITaskTile {
  title: string;
  status: string;
  notes: string;
  dueDate: string;
  timer: number;
}

const TaskSpace: React.FC<ITaskSpace> = ({data}) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4'>
      {data.map((tile: ITaskTile) => 
        <TileWrapper key={tile.title}>
          <TaskTile 
            title={tile.title}
            status={tile.status}
            notes={tile.notes}
            dueDate={tile.dueDate}
            timer={tile.timer}
          />
        </TileWrapper>)}
    </div>
  )
}

const TaskTile = ({title, status, notes, dueDate, timer}: ITaskTile) => {
  return (
    <div className='flex flex-col justify-between text-center bg-primary-100 h-full p-2'>
      <div>{title}</div>
      <div>{status}</div>
      <div>{dueDate}</div>
      <div>{timer}</div>
    </div>
  )
}

export default TaskSpace;