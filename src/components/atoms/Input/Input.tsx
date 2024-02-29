import { useState } from 'react';
import S from './Input.module.scss';

type InputProps = {
  value?: string | number;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number';
};
export const Input = ({
  value,
  onChange,
  onKeyDown,
  type = 'text',
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value || '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      value={inputValue}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      className={S.input}
      placeholder='Search by title'
      type={type}
    />
  );
};
