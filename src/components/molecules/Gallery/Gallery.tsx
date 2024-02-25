import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';
import { useSingleProduct } from '../../../hooks/useSingleProduct';

export const Gallery = () => {
  const { images } = useSingleProduct();

  const formattedImages = images.map((image: string) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <ImageGallery
      items={formattedImages}
      showFullscreenButton={false}
      showPlayButton={false}
      showNav={false}
    />
  );
};
