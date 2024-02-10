import S from './Title.module.scss';

export const getClassName = (type: string) => {
  switch (type) {
    case 'hero':
      return S.title_hero;
    default:
      return S.title;
  }
};
