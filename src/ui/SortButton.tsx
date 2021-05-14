import { FC } from "react";

type TSortButtonProps = {
  type: string;
  name: 'alphabet-sort' | 'weather-conditions';
  inputType: 'radio' | 'checkbox';
  isChecked: boolean;
  icon: string;
  ariaLabel: string;
  onChange: () => void;
};

export const SortButton: FC<TSortButtonProps> = (props) => {
  const { type, name, inputType, isChecked, icon, ariaLabel, onChange } = props;

  return (
    <div
      className={`sort-form__input-wrapper input-wrapper input-wrapper--${inputType}`}
    >
      <input
        id={type}
        value={type}
        type={inputType}
        name={name}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={type} aria-label={ariaLabel}>
        <span className={"icon " + icon} />
      </label>
    </div>
  );
};
