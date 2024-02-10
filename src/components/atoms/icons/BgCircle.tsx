type BgCircleProps = {
  className: string;
};

export const BgEllipse = ({ className }: BgCircleProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 17 14'
      fill='none'
    >
      <ellipse cx='8.68428' cy='6.84924' rx='8.1125' ry='6.84924' />
    </svg>
  );
};
