import { TeammateImage } from './types';

export const getInfoByImage = (image: TeammateImage) => {
  const info = {
    andre: {
      name: 'Andre',
      position: 'Designer',
    },
    anna: {
      name: 'Anna',
      position: 'Developer',
    },
    fedor: {
      name: 'Fedor',
      position: 'Designer',
    },
    masha: {
      name: 'Masha',
      position: 'Developer',
    },
    maxim: {
      name: 'Maxim',
      position: 'Administrator',
    },
    sasha: {
      name: 'Sasha',
      position: 'Developer',
    },
  };

  return info[image];
};
