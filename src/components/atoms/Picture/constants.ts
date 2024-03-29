import Shoes from './images/shoes.jpg';

import Choice from './images/choice.jpg';
import Andre from './images/team_andre.jpg';
import Anna from './images/team_anna.jpg';
import Fedor from './images/team_fedor.jpg';
import Masha from './images/team_masha.jpg';
import Maxim from './images/team_maxim.jpg';
import Sasha from './images/team_sasha.jpg';
import S from './Picture.module.scss';

export const pictureTypes = {
  small: S.picture_small,
  large: S.picture_large,
  xlarge: S.picture_xlarge,
  default: S.picture,
};

export const srcAndAlt = {
  shoes: {
    src: Shoes,
    alt: 'shoes',
  },
  choice: {
    src: Choice,
    alt: 'shoe choice',
  },
  andre: {
    src: Andre,
    alt: 'Andre',
  },
  anna: {
    src: Anna,
    alt: 'Anna',
  },
  fedor: {
    src: Fedor,
    alt: 'Fedor',
  },
  masha: {
    src: Masha,
    alt: 'Masha',
  },
  maxim: {
    src: Maxim,
    alt: 'Maxim',
  },
  sasha: {
    src: Sasha,
    alt: 'Sasha',
  },
};
