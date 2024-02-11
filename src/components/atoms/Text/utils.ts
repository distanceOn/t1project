import S from './Text.module.scss';

export const getTextClassName = (type: string) => {
  switch (type) {
    case 'price':
      return S.text_price;
    default:
      return S.text;
  }
};
