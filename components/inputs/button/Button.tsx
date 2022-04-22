export interface IButton {
  onClick?: () => void;
  text: string;
}

const Button: React.FC<IButton> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={
        'mt-10 font-bold rounded-full h-10 w-32 bg-highlight text-white text-center drop-shadow-xl hover:drop-shadow-2xl hover:bg-primary-400 active:drop-shadow-none active:bg-primary-400'
      }
    >
      {text}
    </button>
  );
};

export default Button;
