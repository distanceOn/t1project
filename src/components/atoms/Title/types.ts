export type TitleColors = 'white' | 'grey' | 'black';
export type TitleSizes = 'min' | 'xmin' | 'small' | 'default' | 'large';

export type TitleStyles = {
  color: TitleColors;
  size: TitleSizes;
};

export type TitleProps = TitleStyles & {
  children: React.ReactNode;
};
