import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(img => (
        <GalleryItem key={img.id}>
          <GalleryImg
            src={img.webformatURL}
            alt={img.tags}
            onClick={() => onClick(img)}
          />
        </GalleryItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};
