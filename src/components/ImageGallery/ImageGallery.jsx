import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
export const ImageGallery = ({ images, onClick }) => {
  return (
    <GalleryList>
      <ImageGalleryItem images={images} onClick={onClick} />
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};
