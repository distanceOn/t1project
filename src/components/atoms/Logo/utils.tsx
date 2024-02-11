import S from './Logo.module.scss';

export const getLogoClassName = (type: string) => {
  switch (type) {
    case 'bg':
      return S.logo_bg;
    case 'small':
      return S.logo_small;
    default:
      return S.logo;
  }
};