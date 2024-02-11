import S from './Title.module.scss';

export const getTitleClassName = (type: string) => {
  switch (type) {
    case 'hero':
      return S.title_hero;
    case 'filter':
      return S.title_filter;
    case 'min':
      return S.title_min;
    case 'about':
      return S.title_about;
    default:
      return S.title;
  }
};
