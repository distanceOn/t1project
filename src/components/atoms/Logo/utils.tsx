import S from './Logo.module.scss';
import { logoColorClassNames, logoSizeClassNames } from './constants';
import { LogoColors, LogoSizes, LogoStyles } from './types';

export const getLogoSizeClassName = (size: LogoSizes) => {
  return logoSizeClassNames[size];
};

export const getColorClassName = (color: LogoColors) => {
  return logoColorClassNames[color];
};

export const getTotalLogoClassName = ({ color, size }: LogoStyles) => {
  const baseClass = S.logo;

  const colorClass = getColorClassName(color);
  const sizeClass = getLogoSizeClassName(size);

  const totalClass = `${baseClass} ${colorClass} ${sizeClass}`;

  return totalClass;
};
