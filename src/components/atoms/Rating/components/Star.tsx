import { StarProps } from '../types';
import S from '../Rating.module.scss';
export const Star = ({ isFull }: StarProps) => (
  <span className={isFull ? S.full : S.empty}>{isFull ? '★' : '☆'}</span>
);
