import S from './Logo.module.scss';
import { LogoColors, LogoSizes, LogoStyles } from './types';

export const getSizeClassName = (size: LogoSizes) => {
  const sizeClassNames = {
    default: S.logo_default,
    small: S.logo_small,
    bg: S.logo_bg,
  };

  return sizeClassNames[size];
};

export const getColorClassName = (color: LogoColors) => {
  const colorClassNames = {
    white: S.color_white,
    grey: S.color_grey,
  };

  return colorClassNames[color];
};

export const getTotalLogoClassName = ({ color, size }: LogoStyles) => {
  const baseClass = S.logo;

  const colorClass = getColorClassName(color);
  const sizeClass = getSizeClassName(size);

  const totalClass = `${baseClass} ${colorClass} ${sizeClass}`;

  return totalClass;
};
