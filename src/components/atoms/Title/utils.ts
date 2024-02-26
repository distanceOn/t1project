import S from './Title.module.scss';
import { TitleStyles } from './types';
import { colors, sizes } from './constants';

export const getTitleClasses = ({ color, size }: TitleStyles) => {
  if (!color || !Object.keys(colors).includes(color)) {
    throw new Error('Invalid color prop');
  }

  if (!size || !Object.keys(sizes).includes(size)) {
    throw new Error('Invalid size prop');
  }

  return {
    color: colors[color],
    size: sizes[size],
  };
};

export const getTotalTitleClassName = ({ color, size }: TitleStyles) => {
  const baseClass = S.title;
  const { color: colorClass, size: sizeClass } = getTitleClasses({
    color,
    size,
  });

  const totalClass = `${baseClass} ${colorClass} ${sizeClass}`;

  return totalClass;
};
