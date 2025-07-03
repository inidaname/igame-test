import React from "react";

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${className} w-fit px-4 py-2 text-md text-slate-100 rounded font-bold bg-stone-700`}
    >
      {children}
    </button>
  );
};

export default Button;
