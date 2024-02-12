import S from './Text.module.scss';
import { TextColors, TextSizes, TextStyles } from './types';

export const getColorClassName = (color: TextColors) => {
  const colorClassNames = {
    white: S.color_white,
    grey: S.color_grey,
    lightgrey: S.color_lightgrey,
    black: S.color_black,
  };

  return colorClassNames[color];
};

export const getSizeClassName = (size: TextSizes) => {
  const sizeClassNames = {
    default: S.text_default,
    thin: S.text_thin,
    lineheight: S.text_lineheight,
  };

  return sizeClassNames[size];
};

export const getTotalTextClassName = ({ color, size }: TextStyles) => {
  const baseClass = S.text;

  const colorClass = getColorClassName(color);
  const sizeClass = getSizeClassName(size);

  const totalClass = `${baseClass} ${colorClass} ${sizeClass}`;

  return totalClass;
};
