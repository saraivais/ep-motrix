import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import contentContext from '../context/context';
import newIcon from '../icons/new-file-svgrepo-com.svg';
import homeIcon from '../icons/home-svgrepo-com.svg';
import '../style/Header.css';

function Header() {
  const { authorization: { user } } = useContext(contentContext);

  return (
    <header className="header-container">
      { user !== '' && (
      <p>
        Hello,
        {' '}
        { user }
      </p>
      )}
      <Link className="header-link" to="/create">
        <img className="header-icons" src={newIcon} alt="new-post" />
        <p>Novo</p>
        {/* <button type="button">Criar um novo post</button> */}
      </Link>
      <Link className="header-link" to="/home">
        <img className="header-icons" src={homeIcon} alt="new-post" />
        <p>Página Inicial</p>
        {/* <button type="button">Página principal</button> */}
      </Link>
      { user === '' && (
      <div className="user-header">
        <Link to="/">
          <button className="header-button" type="button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="header-button" type="button">Criar conta</button>
        </Link>
      </div>
      )}
    </header>
  );
}

export default Header;
