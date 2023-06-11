import { useState, useEffect } from 'react';
import { TextContainer, Text } from './App.styled';
import { getImages } from '../servise/api';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Modal } from '../Modal/Modal';
import { LoadMore } from '../Button/Button';
import { Loader } from '../Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const handleSubmitForm = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalHits(null);
    setError(null);
    setLoading(false);
    setShowModal(false);
    setModalImg(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = img => {
    setModalImg(img.largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetch() {
      setLoading(true);

      try {
        const data = await getImages(query, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalHits(data.totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, [query, page]);

  return (
    <div>
      <Searchbar onSubmit={handleSubmitForm} />

      {totalHits === 0 && (
        <TextContainer>
          <Text>По вашему запросу {query} ни чего не найдено</Text>
        </TextContainer>
      )}

      {error && (
        <TextContainer>
          <Text>{error}</Text>
        </TextContainer>
      )}

      {images && <ImageGallery images={images} onClick={openModal} />}

      {loading && <Loader />}

      {totalHits / images.length > page && (
        <LoadMore onClick={handleLoadMore} />
      )}

      {showModal && (
        <Modal onClose={closeModal}>
          <img src={modalImg} alt="" />
        </Modal>
      )}
    </div>
  );
};
