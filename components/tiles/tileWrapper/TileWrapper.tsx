//import styles from './TileWrapper.module.css';
import { ReactNode } from 'react';

export interface ITileWrapper {
  children: ReactNode;
}

const TileWrapper: React.FC<ITileWrapper> = ({ children }) => {
  return (
    <div className="w-36 md:w-52 h-48 md:h-44 drop-shadow-xl bg-secondary border-primary-100 border-4 hover:border-4 hover:cursor-pointer m-2 mt-4 mx-auto">
      {children}
    </div>
  );
};

export default TileWrapper;
