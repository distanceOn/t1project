import S from './Title.module.scss';
import { TitleColors, TitleSizes, TitleStyles } from './types';

const getTitleColor = (color: TitleColors) => {
  const colors = {
    white: S.color_white,
    grey: S.color_grey,
    black: S.color_black,
  };
  return colors[color];
};

const getTitleSize = (size: TitleSizes) => {
  const sizes = {
    min: S.title_min,
    xmin: S.title_xmin,
    small: S.title_small,
    default: S.title_default,
    large: S.title_large,
  };

  return sizes[size];
};

export const getTotalTitleClassName = ({ color, size }: TitleStyles) => {
  const baseClass = S.title;

  const colorClass = getTitleColor(color);
  const sizeClass = getTitleSize(size);

  const totalClass = `${baseClass} ${colorClass} ${sizeClass}`;

  return totalClass;
};
