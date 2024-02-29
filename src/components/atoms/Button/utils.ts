import S from './Button.module.scss';
import { btnColors, btnTypes } from './constants';
import { BtnColors, BtnStyles, BtnTypes } from './types';

const getBtnColor = (color: BtnColors) => {
  return `${S.color} ${btnColors[color]}`;
};

const getBtnType = (type: BtnTypes) => {
  return `${S.btn} ${btnTypes[type]}`;
};

export const getTotalBtnClassName = ({ color, type }: BtnStyles) => {
  const colorClass = getBtnColor(color);
  const sizeClass = getBtnType(type);

  const totalClass = `${colorClass} ${sizeClass}`;

  return totalClass;
};
