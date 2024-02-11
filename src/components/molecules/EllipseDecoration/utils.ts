import S from './EllipseDecoration.module.scss';

export const getDecorationClassName = (size: 'small' | 'large') => {
  switch (size) {
    case 'large':
      return S.decoration_large;
    default:
      return S.decoration;
  }
};
