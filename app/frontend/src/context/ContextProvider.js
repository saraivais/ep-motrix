import React, { useState, useEffect, useMemo } from 'react';
import propTypes from 'prop-types';
import contentContext from './context';
import { getAllContent } from '../requests/content';

function ContextProvider({ children }) {
  const [allContent, setAllContent] = useState([]);
  const [auth, setAuth] = useState('');
  const [user, setUser] = useState('');
  const [newContent, setNewContent] = useState(true);
  const [deleteList, setDeleteList] = useState([]);

  useEffect(() => {
    const getAndSaveContent = async () => {
      const apiData = await getAllContent();
      setAllContent(apiData);
    };

    if (newContent) {
      getAndSaveContent();
      setNewContent(false);
    }
  }, [newContent]);

  const CONTEXT = useMemo(() => ({
    content: {
      allContent,
      setAllContent,
    },
    authorization: {
      auth,
      setAuth,
      user,
      setUser,
    },
    shouldUpdate: {
      setNewContent,
    },
    massDelete: {
      deleteList,
      setDeleteList,
    },
  }), [allContent, auth, deleteList, user]);

  return (
    <contentContext.Provider value={CONTEXT}>
      { children }
    </contentContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default ContextProvider;
