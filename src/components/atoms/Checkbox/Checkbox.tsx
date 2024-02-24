import S from './Checkbox.module.scss';

type CheckboxProps = {
  children: React.ReactNode;
  isChecked: boolean;
  handleCheck: () => void;
  id: string;
};
export const Checkbox = ({
  children,
  id,
  isChecked,
  handleCheck,
}: CheckboxProps) => {
  return (
    <label htmlFor={id} className={S.container} onClick={handleCheck}>
      <input
        id={`#${id}`}
        className={isChecked ? S.checkbox_checked : S.checkbox}
        type='checkbox'
        checked={isChecked}
        onChange={handleCheck}
      />
      {children}
    </label>
  );
};
