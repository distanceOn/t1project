import S from './CatalogTemplate.module.scss';
type CatalogTemplateProps = {
  children: React.ReactNode;
};
export const CatalogTemplate = ({ children }: CatalogTemplateProps) => {
  return <section className={S.container}>{children}</section>;
};
