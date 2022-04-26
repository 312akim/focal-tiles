//import styles from './Modal.module.css';
import { ReactNode } from 'react';

export interface IModal {
  children: ReactNode;
}

const Modal: React.FC<IModal> = ({ children }) => {
  return (
    <div 
      className={'z-50 flex justify-center fixed h-[100vh] w-[100%] bg-primary-700 inset-0'} 
      onClick={(e) => e.stopPropagation()}>
      <div className='mt-20'>
        {children}
      </div>
    </div>);
};

export default Modal;
