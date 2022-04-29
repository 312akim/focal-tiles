//import styles from './TaskSpace.module.css';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TileWrapper from '../../tiles/tileWrapper/TileWrapper';
import { secondsToTime } from '../../../lib/secondsToTime';
import { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


export interface ITaskSpace {
  data: Array<ITaskTile>
}

const TaskSpace: React.FC<ITaskSpace> = ({data}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
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

interface ITaskTile {
  title: string;
  status: string;
  notes: string;
  dueDate: string;
  timer: number; // number of seconds
}

const TaskTile = ({title, status, notes, dueDate, timer}: ITaskTile) => {
  return (
    <div className='flex flex-col text-center bg-primary-100 h-full p-0 justify-between py-4 text-lg'>
      <div className='text-xl '>{title}</div>
      <div className=''>{dueDate}</div>
      <TaskButtonContainer icon={faToolbox}>
        <div className='mx-auto pr-1'>{status}</div>
      </TaskButtonContainer>
      <TaskButtonContainer icon={faStopwatch}>
        <div className='mx-auto pr-1'>{secondsToTime(timer)}</div>
      </TaskButtonContainer>
    </div>
  )
}

interface ITaskButtonContainer {
  children: ReactNode;
  icon: IconProp
}

const TaskButtonContainer: React.FC<ITaskButtonContainer> = ({children, icon}) => {
  return (
    <div className='flex flex-row mx-2 w-auto pl-1 border-secondary border-2 shadow-md hover:border-primary-400 hover:cursor-pointer'>
      <FontAwesomeIcon icon={icon} size='lg' className='my-auto w-5'/>
      {children}
    </div>
  )
}

export default TaskSpace;