import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => (
  <div
    style={{
      margin: '10px 0px',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.1)',
    }}
    draggable="true"
    onDragStart={e => e.dataTransfer.setData('cardId', card.id)}
  >
    {card.text}
    <button
      style={{
        float: 'right',
        border: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
      }}
      onClick={() => console.log('clicking...')}
    >
      &times;
    </button>
  </div>
);

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
