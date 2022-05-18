//import styles from './Modal.module.css';
import { ReactNode } from 'react';

export interface IModal {
  children: ReactNode;
  inset?: string;
  className?: string;
  bg?: boolean;
}

const Modal: React.FC<IModal> = ({ children, className = '', bg = false }) => {
  return (
    <div className={`flex justify-center ${bg ? 'bg-primary-100 bg-opacity-90 fixed top-0 h-[100vh] w-[100%]' : ''}`}>
      <div className={`z-10 absolute bg-primary-700 ${className} p-3`} 
      onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-col p-6'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
