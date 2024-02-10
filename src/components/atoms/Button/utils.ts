import S from './Button.module.scss';

export const getBtnClassName = (type: string) => {
  switch (type) {
    case 'category':
      return S.btn_category;
    default:
      return S.btn;
  }
};
