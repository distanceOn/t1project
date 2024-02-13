import S from './EllipseDecoration.module.scss';
import { EllipseDecorationSize } from './types';

export const getDecorationClassName = (size: EllipseDecorationSize) => {
  switch (size) {
    case 'large':
      return S.decoration_large;

    default:
      return S.decoration;
  }
};
