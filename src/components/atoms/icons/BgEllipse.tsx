type BgEllipseProps = {
  className: string;
};

export const BgEllipse = ({ className }: BgEllipseProps) => {
  return (
    <svg
      style={{ overflow: 'visible' }}
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
    >
      <ellipse cx='8.68428' cy='6.84924' rx='8.1125' ry='6.84924' />
    </svg>
  );
};
