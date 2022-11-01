import React from 'react';
import PropTypes from 'prop-types';
import '../style/HistoryCard.css';

function HistoryCard(props) {
  const {
    hist: {
      title, body, updated,
    },
  } = props;

  return (
    <div className="history-card">
      <h3 className="history-card-title">{title}</h3>
      <p className="history-card-body">{body}</p>
      <p className="history-card-update">
        Modificado em:
        {' '}
        <span className="history-date">{updated}</span>
      </p>
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
