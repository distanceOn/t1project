import S from './Checkbox.module.scss';

type CheckboxProps = {
  children: React.ReactNode;
};
export const Checkbox = ({ children }: CheckboxProps) => {
  return (
    <label className={S.container}>
      <input className={S.checkbox} type='checkbox' />
      {children}
    </label>
  );
};
