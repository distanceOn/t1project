import S from './Input.module.scss';

type InputProps = {
  onChange: (value: string) => void;
};
export const Input = ({ onChange }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      onChange={handleChange}
      className={S.input}
      placeholder='Search by title'
    />
  );
};
