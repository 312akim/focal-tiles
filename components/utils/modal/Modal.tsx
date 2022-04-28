//import styles from './Modal.module.css';
import { ReactNode } from 'react';

export interface IModal {
  children: ReactNode;
  height?: string;
  width?: string;
  inset?: string;
}

const Modal: React.FC<IModal> = ({ children, height = '100vh', width = '100%', inset = '0' }) => {
  return (
    <div className={`z-10 fixed h-[${height}] w-[${width}] bg-primary-700 inset-${inset}`} 
      onClick={(e) => e.stopPropagation()}>
      <div className='flex flex-col p-6'>
        {children}
      </div>
    </div>);
};

export default Modal;
