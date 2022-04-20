//import styles from './Modal.module.css';
import { ReactNode } from 'react';

export interface IModal {
  children: ReactNode;
}

const Modal: React.FC<IModal> = ({ children }) => {
  return (
    <div className={'flex justify-center fixed h-[100vh] w-[100%] opacity-50 bg-black inset-0'}>
      <div className='mt-20'>
        {children}
      </div>
    </div>);
};

export default Modal;
