export type PictureType = 'small' | 'default' | 'large' | 'xlarge';
export type PictureImage =
  | 'shoes'
  | 'choice'
  | 'andre'
  | 'anna'
  | 'fedor'
  | 'masha'
  | 'maxim'
  | 'sasha';

export type PictureProps = {
  size: PictureType;
  image: PictureImage;
  serverSource?: {
    src: string | undefined;
    alt: string;
  };
};
