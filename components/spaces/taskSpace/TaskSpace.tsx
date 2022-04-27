//import styles from './TaskSpace.module.css';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TileWrapper from '../../tiles/tileWrapper/TileWrapper';


export interface ITaskSpace {
  data: Array<ITaskTile>
}

interface ITaskTile {
  title: string;
  status: string;
  notes: string;
  dueDate: string;
  timer: string; // number of seconds
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
    <div className='flex flex-col text-center bg-primary-100 h-full p-0 justify-between py-4 text-lg'>
      <div className='text-xl '>{title}</div>
      <div className=''>{dueDate}</div>
      <div className='flex flex-row mx-2 w-auto pl-1'>
        <FontAwesomeIcon icon={faToolbox} size='lg' className='my-auto w-5'/>
        <div className='mx-auto pr-1'>{status}</div>
      </div>
      <div className='flex flex-row mx-2 w-auto pl-1'>
        <FontAwesomeIcon icon={faStopwatch} size='lg' className='my-auto w-5'/>
        <div className='mx-auto pr-1'>{timer}</div>
      </div>
    </div>
  )
}

export default TaskSpace;