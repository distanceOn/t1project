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

  if (size === 'small') {
    return (
      <div className={S.container + ' ' + className}>
        <Decoration className={decorationClassName} />
        <BgEllipse className={S.ellipse} />
      </div>
    );
  }

  if (size === 'large') {
    return (
      <div className={S.container + ' ' + className}>
        <Decoration className={decorationClassName} />
        {ellipse === 'large' && <BgEllipse className={S.ellipse_large} />}
      </div>
    );
  }

  return (
    <div className={S.container + ' ' + className}>
      <Decoration className={decorationClassName} />
    </div>
  );
};
