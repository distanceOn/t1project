import { Colors, Paddings, Styles } from './types';

import S from './GenericTemplate.module.scss';

export const getColorClassName = (color: Colors) => {
  const colorClassNames = {
    white: S.color_white,
    purple: S.color_purple,
    black: S.color_black,
  };

  return colorClassNames[color];
};

export const getPaddingClassName = (padding: Paddings) => {
  const paddingClassNames = {
    min: S.padding_min,
    small: S.padding_small,
    xsmall: S.padding_xsmall,
    medium: S.padding_medium,
    large: S.padding_large,
  };

  return paddingClassNames[padding];
};

export const getTotalClass = ({ color, padding }: Styles) => {
  const baseClass = S.container;

  const colorClass = getColorClassName(color);
  const paddingClass = getPaddingClassName(padding);

  const totalClass = `${baseClass} ${colorClass} ${paddingClass}`;

  return totalClass;
};
