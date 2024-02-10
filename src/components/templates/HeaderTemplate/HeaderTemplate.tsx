import React from 'react';
import S from './HeaderTemplate.module.scss';

type HeaderTemplateProps = {
  children: React.ReactNode;
};
export const HeaderTemplate = ({ children }: HeaderTemplateProps) => {
  return <div className={S.container}>{children}</div>;
};
