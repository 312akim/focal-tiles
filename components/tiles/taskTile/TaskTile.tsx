// import styles from './TaskTile.module.css';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { secondsToTime } from '../../../lib/secondsToTime';
import { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

export interface ITaskTile {
  title: string;
  status: string;
  notes: string;
  dueDate: string;
  timer: number; // number of seconds
  id: number;
}

const TaskTile = ({title, status, notes, dueDate, timer}: ITaskTile) => {
  const [showStatus, setShowStatus] = useState(false)
  
  const handleStatusClick = (item: string): void => {
    setShowStatus(prev => !prev);
    console.log(item)
    if (item !== status) {
      // Dispatch status to equal clicked item
    }
  }

  const handleTimerClick = (): void => {
    console.log('clicked')
  }

  const statusOptions = ["New", "Started", "Ongoing", "Blocked", "Complete"]

  return (
    <div className='flex flex-col text-center bg-primary-100 h-full p-0 justify-between py-4 text-lg'>
      <div className='text-xl '>{title}</div>
      <div className=''>{dueDate}</div>
      <TaskButtonContainer icon={faToolbox} className='flex flex-col' clickHandler={() => setShowStatus((prev) => !prev)}>
        <button className='mx-auto pr-1'>{status}</button>
      </TaskButtonContainer>
      
      <StatusMenu showStatus={showStatus} status={status} clickHandler={handleStatusClick} menuItems={statusOptions} />
      
      <TaskButtonContainer icon={faStopwatch}>
        <button className='mx-auto pr-1' onClick={handleTimerClick}>{secondsToTime(timer)}</button>
      </TaskButtonContainer>
    </div>
  )
}

export const StatusMenu = ({showStatus, status, clickHandler, menuItems}) => {
  return (
    <div className={`${showStatus ? '' : 'hidden'} fixed w-[92%] left-[4%] right-[4%] py-2 top-[0%] h-[100%] bg-primary-700 rounded-md flex flex-col justify-around`}>
      {menuItems.map((item, index) => {
        return <button className={`${item === status ? "bg-highlight" : ""} text-primary-100 hover:text-primary-400`} key={index} onClick={() => clickHandler(item)}>{item}</button>
      })}
    </div>
  )
}

interface ITaskButtonContainer {
  children: ReactNode;
  icon: IconProp;
  clickHandler: () => void;
  className: string;
}

const TaskButtonContainer: React.FC<ITaskButtonContainer> = ({children, icon, clickHandler, className}) => {
  return (
    <div className={`${className} flex flex-row mx-2 w-auto pl-1 border-secondary border-2 shadow-md hover:border-primary-400 hover:cursor-pointer`} onClick={clickHandler}>
      <FontAwesomeIcon icon={icon} size='lg' className='my-auto w-5'/>
      {children}
    </div>
  )
}

export default TaskTile;