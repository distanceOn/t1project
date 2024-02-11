import { Colors, Paddings, Styles } from './types';

import S from './GenericTemplate.module.scss';

export const getColorClassName = (color: Colors) => {
  switch (color) {
    case 'white':
      return S.color_white;
    case 'purple':
      return S.color_purple;
  }
};

const getPaddingClassName = (padding: Paddings) => {
  switch (padding) {
    case 'min':
      return S.padding_min;
    case 'small':
      return S.padding_small;
    case 'medium':
      return S.padding_medium;
    case 'large':
      return S.padding_large;
  }
};

export const getTotalClass = ({ color, padding }: Styles) => {
  const baseClass = S.container;

  const colorClass = getColorClassName(color);
  const paddingClass = getPaddingClassName(padding);

  const totalClass = `${baseClass} ${colorClass} ${paddingClass}`;

  return totalClass;
};
