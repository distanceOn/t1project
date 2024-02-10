import S from './CatalogTemplate.module.scss';
type CatalogTemplateProps = {
  children: React.ReactNode;
};
export const CatalogTemplate = ({ children }: CatalogTemplateProps) => {
  return <div className={S.container}>{children}</div>;
};
