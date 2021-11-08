import React from "react";

type ErrorClassType = string | undefined;
interface ICustomInput {
  error?: string;
  label: string;
  name: string;
  onChange: (name: string, value: string) => void;
  type: string;
  value: string | undefined;
}

export const CustomInput: React.FC<ICustomInput> = ({
  error,
  label,
  name,
  onChange,
  type,
  value
}) => {
  const errorClass: ErrorClassType = error ? "error__input" : undefined;
  const handleChange = (event: { target: HTMLInputElement }) => {
    const target = event.target;
    onChange( target.name, target.value );
  };

  return (
    <li className="list__item">
      <label className="list__label">
        <span className="list__span">{label}</span>
        <div className={errorClass}>
          <input
            className="list__input"
            type={type}
            name={name}
            onChange={handleChange}
            value={value}
          />
        </div>
        {error ? <div className="required__label">{error}</div> : null}
      </label>
    </li>
  );
};
