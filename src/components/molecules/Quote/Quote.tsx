import S from './Quote.module.scss';

type QuoteProps = {
  children: React.ReactNode;
};

export const Quote = ({ children }: QuoteProps) => {
  return (
    <div className={S.container}>
      <div className={S.line}></div>
      {children}
    </div>
  );
};
