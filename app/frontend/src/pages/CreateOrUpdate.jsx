import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { editOneContent, getOneContent, createContent } from '../requests/content';
import contentContext from '../context/context';

function CreateOrUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();
  const [content, setContent] = useState({ title: '', body: '' });
  const [disabled, setDisabled] = useState(true);

  const { authorization: { auth }, shouldUpdate: { setNewContent } } = useContext(contentContext);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setContent((prevState) => (({ ...prevState, [name]: value })));
  };

  useEffect(() => {
    const getExistingPost = async () => {
      const response = await getOneContent(id);
      setContent(response);
    };
    if (pathname !== '/create') {
      getExistingPost();
    }
  }, [pathname, id]);

  useEffect(() => {
    if (content.title.length !== 0 && content.body.length !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [content]);

  const editOrCreate = async () => {
    if (pathname !== '/create') {
      await editOneContent(id, auth, content);
      alert('Post editado com sucesso!');
      setNewContent(true);
      navigate(`/content/${id}`);
    }
    if (pathname === '/create') {
      await createContent(auth, content);
      alert('Post criado com sucesso!');
      setNewContent(true);
      navigate('/home');
    }
  };

  return (
    <div>
      <input name="title" type="text" value={content.title} onChange={onChange} />
      <textarea name="body" cols="70" rows="10" value={content.body} onChange={onChange} />
      <button type="button" onClick={editOrCreate} disabled={disabled}>Enviar</button>
    </div>
  );
}

export default CreateOrUpdate;
