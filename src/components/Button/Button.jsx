import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

export const LoadMore = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      Load more
    </Btn>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func,
};
