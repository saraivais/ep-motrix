import React, { useContext, useState, useEffect } from 'react';
import context from '../context/context';
import Loading from '../components/Loading';
import ContentCard from '../components/ContentCard';
import { massDelete } from '../requests/content';

function Content() {
  const [display, setDisplay] = useState([]);

  const {
    content: {
      allContent,
    },
    massDelete: {
      deleteList,
      setDeleteList,
    },
    authorization: {
      auth,
    },
    shouldUpdate: {
      setNewContent,
    },
  } = useContext(context);

  useEffect(() => {
    setDisplay(allContent);
  }, [allContent]);

  const deleteAllAndResetList = async () => {
    await massDelete(auth, deleteList);
    setDeleteList([]);
    setNewContent(true);
  };

  return (
    <div className="content-container">
      <button type="button" onClick={deleteAllAndResetList}>Deletar todos os selecionados!</button>
      { display.length === 0 && <Loading />}
      { display.length !== 0 && display
        .map((content) => <ContentCard key={content.id} content={content} />)}
    </div>
  );
}

export default Content;
