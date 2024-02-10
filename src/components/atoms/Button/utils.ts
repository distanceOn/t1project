import S from './Button.module.scss';

export const getBtnClassName = (type: string) => {
  switch (type) {
    case 'category':
      return S.btn_category;
    case 'apply':
      return S.btn_apply;
    default:
      return S.btn;
  }
};
