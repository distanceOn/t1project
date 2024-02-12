export type BtnColors = 'primary' | 'transparent' | 'secondary';
export type BtnTypes =
  | 'default'
  | 'reset'
  | 'apply'
  | 'category'
  | 'steps'
  | 'catalog';

export type BtnStyles = {
  color: BtnColors;
  type: BtnTypes;
};

export type ButtonProps = BtnStyles & {
  children: React.ReactNode;
  href?: string;
};
