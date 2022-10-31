import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import contentContext from '../context/context';

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
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{updated}</p>
      <Link to={`/content/${id}`}>
        <button type="button">Detalhes</button>
      </Link>
      <input type="checkbox" name="delete" onChange={onChecked} />
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
