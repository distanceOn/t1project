import ImageGallery from 'react-image-gallery';

import Shoes from '../../../components/atoms/Picture/images/shoes.jpg';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';

const initialImages = [
  {
    original: Shoes,
    thumbnail: Shoes,
  },
  {
    original: Shoes,
    thumbnail: Shoes,
  },
  {
    original: Shoes,
    thumbnail: Shoes,
  },
  {
    original: Shoes,
    thumbnail: Shoes,
  },
  {
    original: Shoes,
    thumbnail: Shoes,
  },
  {
    original: Shoes,
    thumbnail: Shoes,
  },
];

const images = initialImages.map(img => ({
  ...img,
}));
export const Gallery = () => {
  return (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      showNav={false}
    />
  );
};
