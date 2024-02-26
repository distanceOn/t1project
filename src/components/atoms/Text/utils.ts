import S from './Text.module.scss';
import { colorClassNames, sizeClassNames } from './constants';
import { TextColors, TextSizes, TextStyles } from './types';

export const getColorClassName = (color: TextColors): string => {
  const className = colorClassNames[color];

  if (!className) {
    throw new Error('Invalid color prop');
  }

  return className;
};

export const getSizeClassName = (size: TextSizes): string => {
  const className = sizeClassNames[size];

  if (!className) {
    throw new Error('Invalid size prop');
  }

  return className;
};

export const getTotalTextClassName = ({ color, size }: TextStyles): string => {
  const baseClass = S.text;

  const colorClass = getColorClassName(color);
  const sizeClass = getSizeClassName(size);

  const totalClass = `${baseClass} ${colorClass} ${sizeClass}`;

  return totalClass;
};
