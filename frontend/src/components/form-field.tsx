import React from "react";

interface Props extends InputProps {
  label?: string;
}

const FormField: React.FC<Props> = ({ label, ...props }) => {
  return (
    <div className="w-full border rounded-md p-4 flex flex-col space-y-2">
      {label && (
        <label className="text-sm text-zinc-600 font-bold" htmlFor={label}>
          {label.toLocaleUpperCase()}
        </label>
      )}
      <input
        type="text"
        id={label}
        className="border border-zinc-400 rounded-md py-3 px-3"
        {...props}
      />
    </div>
  );
};

export default FormField;
