//import styles from './SpacePicker.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from '../../utils/modal/Modal';

export interface ISpacePicker {
  spaces: Array<{displayName: string, onClick: () => void}>;
}

const SpacePicker: React.FC<ISpacePicker> = ({ spaces }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className='flex-col mx-auto my-auto hover:cursor-pointer w-[30%] md:w-1/3' tabIndex={0} onClick={() => setHidden(!hidden)}>
        <div className='flex justify-center'>
          <h2 className='my-auto px-1 text-lg'>Space</h2>
          <FontAwesomeIcon icon={faAngleDown} className='my-auto pl-1' size='lg'/>
        </div>
        <div>
          {
            hidden ? <div/> : 
            <Modal>
              <FontAwesomeIcon icon={faRectangleXmark} className='self-end' size='2x' onClick={() => setHidden(true)} />
              <div className='mt-20 text-center'>Inside Modal Placeholder</div>
            </Modal>
          }
        </div>
    </div>
  );
};

export default SpacePicker;