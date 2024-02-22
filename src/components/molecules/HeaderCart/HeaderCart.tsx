import { useState } from 'react';
import { CartIcon } from '../../atoms/icons/CartIcon';
import S from './HeaderCart.module.scss';
import { BgEllipse } from '../../atoms/icons/BgEllipse';
import { Link } from 'react-router-dom';
export const HeaderCart = () => {
  const [cartCount] = useState(1);
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link to='#' className={S.container}>
      <span>Cart</span>
      <div className={S.cart}>
        <CartIcon className={S.cart__icon} />
        <div className={S.counter}>
          <BgEllipse className={S.counter__bg} />
          <span className={S.counter__num}>{cartCount}</span>
        </div>
      </div>
    </Link>
  );
};
