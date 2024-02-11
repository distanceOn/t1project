import { Decoration } from '../../atoms/Decoration/Decoration';
import { BgEllipse } from '../../atoms/icons/BgEllipse';
import S from './EllipseDecoration.module.scss';
import { getDecorationClassName } from './utils';

type EllipseDecorationProps = {
  className: string;
  size: 'small' | 'large';
};
export const EllipseDecoration = ({
  className,
  size,
}: EllipseDecorationProps) => {
  const decorationClassName = getDecorationClassName(size);
  return (
    <div className={S.container + ' ' + className}>
      <Decoration className={decorationClassName} />
      {size === 'small' && <BgEllipse className={S.ellipse} />}
    </div>
  );
};
