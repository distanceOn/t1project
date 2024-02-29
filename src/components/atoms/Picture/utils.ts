import { pictureTypes, srcAndAlt } from './constants';

import { PictureImage, PictureType } from './types';

export const getPictureClassName = (type: PictureType) => {
  return pictureTypes[type];
};

export const getSrcAndAlt = (image: PictureImage) => {
  return srcAndAlt[image];
};
