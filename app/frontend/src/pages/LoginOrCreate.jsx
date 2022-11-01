import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import contentContext from '../context/context';
import { postLogin, createUser } from '../requests/users';
import '../style/LoginOrCreate.css';

function LoginOrCreate() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    authorization: {
      setAuth,
      setUser,
    },
  } = useContext(contentContext);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setLoginInfo((prevState) => (({ ...prevState, [name]: value })));
  };

  const loginAndSaveToken = async () => {
    try {
      const { token } = await postLogin(loginInfo);
      setAuth(token);
      setLoginInfo({ email: '', password: '' });
      navigate('/home');
    } catch (error) {
      alert('Email ou senha inválidos!');
      setLoginInfo({ email: '', password: '' });
    }
    setUser(loginInfo.email);
  };

  const createAndSaveToken = async () => {
    try {
      const { token } = await createUser(loginInfo);
      setAuth(token);
      setLoginInfo({ email: '', password: '' });
      alert('Usuário criado com sucesso!');
      navigate('/home');
    } catch (error) {
      alert('Email ou senha inválidos!');
      setLoginInfo({ email: '', password: '' });
    }
  };

  useEffect(() => {
    if (loginInfo.email.length < 10 || loginInfo.password.length < 8) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [loginInfo]);

  return (
    <div className="login-create-page">
      <form className="form-container">
        <input className="user-inputs" type="text" name="email" value={loginInfo.email} onChange={onChange} />
        <input className="user-inputs" type="password" name="password" value={loginInfo.password} onChange={onChange} />
        <button className="user-button" type="button" disabled={valid} onClick={pathname === '/' ? loginAndSaveToken : createAndSaveToken}>{ pathname === '/' ? 'Login' : 'Criar'}</button>
      </form>
    </div>
  );
}

export default LoginOrCreate;
