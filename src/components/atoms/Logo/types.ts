export type LogoColors = 'white' | 'grey';
export type LogoSizes = 'default' | 'small' | 'bg';

export type LogoStyles = {
  color: LogoColors;
  size: LogoSizes;
};

export type LogoProps = LogoStyles & {
  link?: boolean;
};
