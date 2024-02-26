import S from './Rating.module.scss';
import { RatingProps, StarProps } from './types';

const Star = ({ isFull }: StarProps) => (
  <span className={isFull ? S.full : S.empty}>{isFull ? '★' : '☆'}</span>
);

const Rating: React.FC<RatingProps> = ({ value, max = 5 }) => {
  const stars = Array.from({ length: max }, (_, index) => ({
    isFull: index < value,
  }));

  return (
    <div className={S.rating}>
      {stars.map((star, index) => (
        <Star key={index} isFull={star.isFull} />
      ))}
    </div>
  );
};

export default Rating;
