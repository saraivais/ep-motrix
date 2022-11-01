import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import contentContext from '../context/context';
import '../style/ContentCard.css';

function ContentCard(props) {
  const { massDelete: { setDeleteList } } = useContext(contentContext);

  const {
    content: {
      id, title, body, updated,
    },
  } = props;

  const onChecked = ({ target }) => {
    if (target.checked) {
      setDeleteList((prevState) => [...prevState, id]);
    } else {
      setDeleteList((prevState) => prevState.filter((number) => number !== id));
    }
  };

  return (
    <div className="content-card-container">
      <h1 className="content-card-title">{title}</h1>
      <p className="content-card-body">{body}</p>
      <p className="content-card-updated">
        Última modificação:
        {' '}
        <span className="update-date">{updated}</span>
      </p>
      <div className="details-and-delete-container">
        <Link to={`/content/${id}`}>
          <button className="details-btn" type="button">Detalhes</button>
        </Link>
        <label className="delete-label" htmlFor={`${id}-delete`}>
          Apagar
          <input className="delete-checkbox" type="checkbox" name="delete" id={`${id}-delete`} onChange={onChecked} />
        </label>
      </div>
    </div>
  );
}

ContentCard.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContentCard;
