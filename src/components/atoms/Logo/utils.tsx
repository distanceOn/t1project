import S from './Logo.module.scss';

export const getClassName = (type: string) => {
  switch (type) {
    case 'bg':
      return S.logo_bg;
    case 'small':
      return S.logo_small;
    default:
      return S.logo;
  }
};
