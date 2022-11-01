import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getOneContent, deleteOne } from '../requests/content';
import HistoryCard from '../components/HistoryCard';
import contentContext from '../context/context';
import '../style/Details.css';

function Details() {
  const { id } = useParams();
  const [contentDetails, setContentDetails] = useState(undefined);
  const { authorization: { auth }, shouldUpdate: { setNewContent } } = useContext(contentContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getAndSaveContentDetails = async () => {
      const content = await getOneContent(id);
      setContentDetails(content);
    };

    if (id) {
      getAndSaveContentDetails(id);
    }
  }, [id]);

  const deleteThisPost = async () => {
    await deleteOne(id, auth);
    alert('Post deletado com sucesso!');
    setNewContent(true);
    navigate('/home');
  };

  return (
    <div className="details-page">
      {contentDetails && (
        <div className="details-container">
          <div className="details-latest-content">
            <h1 className="details-title">{contentDetails.title}</h1>
            <p className="details-body">{contentDetails.body}</p>
            <p className="details-updated">
              Última modificação:
              {' '}
              <span className="details-date">{contentDetails.updated}</span>
            </p>
          </div>
          <div className="buttons-container">
            <Link to={`/update/${id}`}>
              <button className="edit-btn" type="button">Editar</button>
            </Link>
            <button className="delete-btn" type="button" onClick={deleteThisPost}>Apagar</button>
          </div>
          <h2 className="history-title">Histórico de Modificações:</h2>
          <div className="history-container">
            {contentDetails.history
              .map((historyObj) => <HistoryCard key={`${historyObj.title}-${historyObj.updated}`} hist={historyObj} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
