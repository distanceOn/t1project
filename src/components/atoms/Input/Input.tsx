import { useState } from 'react';
import S from './Input.module.scss';

type InputProps = {
  value?: string | number;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export const Input = ({ value, onChange, onKeyDown }: InputProps) => {
  const [valueInput, setValueInput] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value) {
      setValueInput(e.target.value);
    }
    onChange(e.target.value);
  };
  return (
    <input
      value={value && valueInput}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      className={S.input}
      placeholder='Search by title'
    />
  );
};
