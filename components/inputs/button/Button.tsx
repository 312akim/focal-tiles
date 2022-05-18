import { ReactChild } from "react";

export interface IButton {
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  children?: ReactChild;
  className?: string;
}

const Button: React.FC<IButton> = ({ onClick, type, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `select-none font-bold rounded-full h-10 w-32 bg-highlight text-white text-center drop-shadow-xl hover:drop-shadow-2xl hover:bg-primary-400 active:drop-shadow-none active:bg-primary-400 ${className}`
      }
    >
      {children}
    </button>
  );
};

export default Button;
