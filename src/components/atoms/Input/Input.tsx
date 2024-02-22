import S from './Input.module.scss';

type InputProps = {
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export const Input = ({ onChange, onKeyDown }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      onChange={handleChange}
      onKeyDown={onKeyDown}
      className={S.input}
      placeholder='Search by title'
    />
  );
};
