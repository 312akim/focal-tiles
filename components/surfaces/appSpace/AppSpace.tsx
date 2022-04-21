//import styles from './AppSpace.module.css';
import { ReactNode } from "react";

export interface IAppSpace {
  children: ReactNode
}

const AppSpace: React.FC<IAppSpace> = ({children}) => {
  return (
    <div className='bg-slate min-h-[86vh] p-4'>
      {children}
    </div>
  );
};


export default AppSpace;