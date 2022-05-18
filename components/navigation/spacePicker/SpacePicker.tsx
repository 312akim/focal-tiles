//import styles from './SpacePicker.module.css';
import {
  faAngleDown,
  faRectangleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ISpace,
  selectAppCurrentSpace,
  selectAppSpaces,
  switchSpace,
} from '../../../app/appSlice';
import Modal from '../../utils/modal/Modal';

export interface ISpacePicker {
  
}

const SpacePicker: React.FC<ISpacePicker> = () => {
  const [hidden, setHidden] = useState(true);
  const spaces = useSelector(selectAppSpaces);
  const selectedSpace = useSelector(selectAppCurrentSpace);
  const selectedDisplayName =
    selectedSpace === 0
      ? 'Space'
      : spaces[spaces.findIndex((obj) => obj.id === selectedSpace)].displayName;

  return (
    <div
      className="flex-col mx-auto my-auto hover:cursor-pointer w-[30%] md:w-1/3"
      tabIndex={0}
      onClick={() => setHidden(!hidden)}
    >
      <div className="flex justify-center">
        <h1 className="my-auto px-1 text-xl">{selectedDisplayName}</h1>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="my-auto pl-1"
          size="lg"
        />
      </div>
      <div className='flex justify-center'>
        {hidden ? (
          <div />
        ) : (
          <Modal className='border-2 border-primary-400 h-auto w-96'>
            <div className="flex flex-row justify-between">
              <h2 className="text-lg">{selectedDisplayName}</h2>
              <FontAwesomeIcon
                icon={faRectangleXmark}
                className="self-end"
                size="2x"
                onClick={() => setHidden(true)}
              />
            </div>
            <div className="mt-20 text-center flex flex-col gap-3">
              {spaces.map((space) => {
                return (
                  <Space
                    displayName={space.displayName}
                    key={space.id}
                    id={space.id}
                  />
                );
              })}
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

const Space = ({ displayName, id }: ISpace) => {
  const dispatch = useDispatch();
  return <div onClick={() => dispatch(switchSpace(id))}>{displayName}</div>;
};

export default SpacePicker;
