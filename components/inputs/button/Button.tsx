import styles from './Button.module.css';

export interface IButton {
  onClick?: () => void,
  text: string,
}

const Button: React.FC<IButton> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={'mt-10 font-bold rounded-full h-10 w-32 bg-indigo text-white text-center drop-shadow-xl hover:drop-shadow-2xl hover:bg-gray active:drop-shadow-none active:bg-gray'}>
      {text}
    </button>
  )
};

export default Button;
