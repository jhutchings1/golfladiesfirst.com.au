import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import StoreContext from '../../../context/store-context';
import { Wrapper } from './styles';

const LineItem = ({ lineItem }) => {
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext);

  const variantImage = lineItem.variant.image ? (
    <img
      src={lineItem.variant.image.src}
      alt={`${lineItem.title} product shot`}
      height="60px"
    />
  ) : null;

  const selectedOptions = lineItem.variant.selectedOptions
    ? lineItem.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null;

  const handleRemove = () => {
    removeLineItem(client, checkout.id, lineItem.id);
  };

  return (
    <Wrapper>
      {variantImage}
      <p>
        {lineItem.title}
        {`  `}
        {lineItem.variant.title === !'Default Title'
          ? lineItem.variant.title
          : ''}
      </p>
      {selectedOptions}
      {lineItem.quantity}
      <button onClick={handleRemove} type="button">
        Remove
      </button>
    </Wrapper>
  );
};

LineItem.propTypes = {
  lineItem: PropTypes.object.isRequired,
};

export default LineItem;
