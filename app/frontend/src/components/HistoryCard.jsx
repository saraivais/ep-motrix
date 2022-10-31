import React from 'react';
import PropTypes from 'prop-types';

function HistoryCard(props) {
  const {
    hist: {
      title, body, updated,
    },
  } = props;

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{updated}</p>
    </div>
  );
}

HistoryCard.propTypes = {
  hist: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
  }).isRequired,
};

export default HistoryCard;
