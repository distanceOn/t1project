import { Decoration } from '../../atoms/Decoration/Decoration';
import { BgEllipse } from '../../atoms/icons/BgEllipse';
import S from './EllipseDecoration.module.scss';
import { EllipseDecorationProps } from './types';
import { getDecorationClassName } from './utils';

export const EllipseDecoration = ({
  className,
  size,
  ellipse,
}: EllipseDecorationProps) => {
  const decorationClassName = getDecorationClassName(size);

  return (
    <div className={`${S.container} ${className}`}>
      <Decoration className={decorationClassName} />
      {size === 'small' && <BgEllipse className={S.ellipse} />}
      {size === 'large' && ellipse === 'large' && (
        <BgEllipse className={S.ellipse_large} />
      )}
    </div>
  );
};
