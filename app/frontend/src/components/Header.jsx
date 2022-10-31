import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/create">
        <button type="button">Criar um novo post</button>
      </Link>
      <Link to="/home">
        <button type="button">Página principal</button>
      </Link>
      <Link to="/">
        <button type="button">Login</button>
      </Link>
      <Link to="/signup">
        <button type="button">Criar conta</button>
      </Link>
    </header>
  );
}

export default Header;
