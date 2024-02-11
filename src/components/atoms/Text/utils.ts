import S from './Text.module.scss';

export const getTextClassName = (type: string) => {
  switch (type) {
    case 'price':
      return S.text_price;
    case 'select':
      return S.text_select;
    case 'checkbox':
      return S.text_checkbox;
    default:
      return S.text;
  }
};
