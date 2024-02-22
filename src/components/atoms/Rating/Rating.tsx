import React from 'react';
import S from './Rating.module.scss';

interface RatingProps {
  value: number; // Текущее значение рейтинга
  max?: number; // Максимально возможное значение рейтинга
}

const Rating: React.FC<RatingProps> = ({ value, max = 5 }) => {
  const stars = Array.from({ length: max }, (_, index) =>
    index < value ? 'full' : 'empty'
  );

  return (
    <div className={S.rating}>
      {stars.map((star, index) => (
        <span key={index} className={star === 'full' ? S.full : S.empty}>
          {star === 'full' ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Rating;
