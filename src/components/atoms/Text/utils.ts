import S from './Text.module.scss';
import { TextColors, TextSizes, TextStyles } from './types';

const colorClassNames: Record<TextColors, string> = {
  white: S.color_white,
  grey: S.color_grey,
  lightgrey: S.color_lightgrey,
  black: S.color_black,
};

const sizeClassNames: Record<TextSizes, string> = {
  default: S.text_default,
  thin: S.text_thin,
  lineheight: S.text_lineheight,
};

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
