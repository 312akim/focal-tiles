//import styles from './TileWrapper.module.css';
import { ReactNode } from 'react';

export interface ITileWrapper {
  children: ReactNode;
}

const TileWrapper: React.FC<ITileWrapper> = ({ children }) => {
  return (
    <div className="w-32 md:w-52 h-32 drop-shadow-xl bg-secondary border-primary-700 hover:border-highlight border-2 m-2 mt-4 mx-auto">
      {children}
    </div>
  );
};

export default TileWrapper;
