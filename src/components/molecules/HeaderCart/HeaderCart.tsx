import { useState } from 'react';
import { CartIcon } from '../../atoms/icons/CartIcon';
import S from './HeaderCart.module.scss';
import { BgEllipse } from '../../atoms/icons/BgEllipse';
export const HeaderCart = () => {
  const [cartCount] = useState(1);
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href='#' className={S.container}>
      <span>Cart</span>
      <div className={S.cart}>
        <CartIcon className={S.cart__icon} />
        <div className={S.counter}>
          <BgEllipse className={S.counter__bg} />
          <span className={S.counter__num}>{cartCount}</span>
        </div>
      </div>
    </a>
  );
};
