import { Dispatch, useState } from 'react';
import styles from './TextField.module.css';

export interface ITextField {
  label: string;
  id: string;
  value: string;
  setValue: (str: string) => void;
}

const TextField: React.FC<ITextField> = ({ id, label, value, setValue }) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className='w-auto sm:max-w-[320px] md:max-w-[480px] h-[42px] my-3'>
      <label htmlFor={id} className={
        `absolute select-none pl-3 hover:cursor-text px-[6px] transition-transform opacity-80 whitespace-nowrap flex items-center h-[42px]
        ${focused || value !== '' ? 'h-[20px] -translate-y-3 translate-x-3 text-sm bg-white opacity-100 rounded-lg' : ''}`}
      >
        {label}
      </label>
      <input
        id={id}
        data-testid={id}
        className='h-full pl-[6px] text-lg border-2 border-primary-100 focus:border-primary-100 focus:outline-none'
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
      />
    </div>
  )
};

export default TextField;
