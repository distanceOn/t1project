import S from './Button.module.scss';

export const getBtnClassName = (type: string) => {
  switch (type) {
    case 'category':
      return S.btn_category;
    case 'apply':
      return S.btn_apply;
    case 'reset':
      return S.btn_reset;
    default:
      return S.btn;
  }
};
