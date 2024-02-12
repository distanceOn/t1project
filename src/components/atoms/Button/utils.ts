import S from './Button.module.scss';
import { BtnColors, BtnStyles, BtnTypes } from './types';

const getBtnColor = (color: BtnColors) => {
  const colors = {
    primary: S.color_primary,
    secondary: S.color_secondary,
    transparent: S.color_transparent,
  };
  return `${S.color} ${colors[color]}`;
};

const getBtnType = (type: BtnTypes) => {
  const types = {
    default: S.btn_default,
    reset: S.btn_reset,
    apply: S.btn_apply,
    category: S.btn_category,
    steps: S.btn_steps,
    catalog: S.btn_catalog,
  };

  return `${S.btn} ${types[type]}`;
};

export const getTotalBtnClassName = ({ color, type }: BtnStyles) => {
  const colorClass = getBtnColor(color);
  const sizeClass = getBtnType(type);

  const totalClass = `${colorClass} ${sizeClass}`;

  return totalClass;
};
