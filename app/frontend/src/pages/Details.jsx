import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getOneContent, deleteOne } from '../requests/content';
import HistoryCard from '../components/HistoryCard';
import contentContext from '../context/context';

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
    <div>
      {contentDetails && (
        <div>
          <h1>{contentDetails.title}</h1>
          <p>{contentDetails.body}</p>
          <p>
            Last updated:
            {' '}
            <span>{contentDetails.updated}</span>
          </p>
          <Link to={`/update/${id}`}>
            <button type="button">Editar</button>
          </Link>
          <button type="button" onClick={deleteThisPost}>Deletar</button>
          <div>
            <h2>History</h2>
            {contentDetails.history
              .map((historyObj) => <HistoryCard key={`${historyObj.title}-${historyObj.updated}`} hist={historyObj} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
