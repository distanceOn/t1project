export type PictureType = 'small' | 'default' | 'large';
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
};
