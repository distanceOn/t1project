import S from './Decoration.module.scss';

type DecorationProps = {
  className: string;
};

export const Decoration = ({ className }: DecorationProps) => {
  const totalClass = S.decoration + ' ' + className;
  return <div className={totalClass} />;
};
