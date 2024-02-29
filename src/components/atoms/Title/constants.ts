import S from './Title.module.scss';

export const colors = {
  white: S.color_white,
  grey: S.color_grey,
  black: S.color_black,
};

export const sizes = {
  min: S.title_min,
  xmin: S.title_xmin,
  small: S.title_small,
  default: S.title_default,
  large: S.title_large,
};

export const titleTagMap: Record<string, keyof JSX.IntrinsicElements> = {
  large: 'h1',
  small: 'h3',
  min: 'h4',
  xmin: 'h4',
  default: 'h2',
};
