export type Colors = 'white' | 'purple';
export type Paddings = 'min' | 'small' | 'xsmall' | 'medium' | 'large';

export type Styles = {
  color: Colors;
  padding: Paddings;
};

export type GenericTemplateProps = Styles & {
  children: React.ReactNode;
};
