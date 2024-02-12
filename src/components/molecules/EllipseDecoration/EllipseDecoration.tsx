import { Decoration } from '../../atoms/Decoration/Decoration';
import { BgEllipse } from '../../atoms/icons/BgEllipse';
import S from './EllipseDecoration.module.scss';
import { getDecorationClassName } from './utils';

type EllipseDecorationProps = {
  className: string;
  size: 'small' | 'large';
  ellipse?: 'large';
};
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

  if (ellipse === 'large' && size === 'large') {
    return (
      <div className={S.container + ' ' + className}>
        <Decoration className={decorationClassName} />
        <BgEllipse className={S.ellipse_large} />
      </div>
    );
  }

  return (
    <div className={S.container + ' ' + className}>
      <Decoration className={decorationClassName} />
    </div>
  );
};
