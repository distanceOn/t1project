import S from './Rating.module.scss';
import { Star } from './components/Star';
import { RatingProps } from './types';

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
