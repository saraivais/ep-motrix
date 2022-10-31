import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import contentContext from '../context/context';

function Header() {
  const { authorization: { user } } = useContext(contentContext);

  return (
    <header>
      { user !== '' && (
      <p>
        Hello,
        {' '}
        { user }
      </p>
      )}
      <Link to="/create">
        <button type="button">Criar um novo post</button>
      </Link>
      <Link to="/home">
        <button type="button">Página principal</button>
      </Link>
      { user === '' && (
      <>
        <Link to="/">
          <button type="button">Login</button>
        </Link>
        <Link to="/signup">
          <button type="button">Criar conta</button>
        </Link>
      </>
      )}
    </header>
  );
}

export default Header;
