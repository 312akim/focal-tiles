//import styles from './SpacePicker.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import DropDownMenu from '../../utils/dropdown/DropDownMenu';
import { useState } from 'react';

export interface ISpacePicker {
  spaces: Array<{displayName: string, onClick: () => void}>;
}

const SpacePicker: React.FC<ISpacePicker> = ({ spaces }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className='flex-col mx-auto my-auto hover:cursor-pointer' tabIndex={0} onBlur={() => setHidden(true)} onClick={() => setHidden(!hidden)}>
      <div className='flex'>
        <h2 className='my-auto px-1 text-lg'>Space Picker</h2>
        <FontAwesomeIcon icon={faAngleDown} className='my-auto pl-1' size='lg'/>
      </div>
      <div>
        <DropDownMenu hidden={hidden} displayData={spaces} empty={false} width='w-32'/>
      </div>
    </div>
  );
};

export default SpacePicker;
