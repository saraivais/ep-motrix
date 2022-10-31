import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import contentContext from '../context/context';
import { postLogin, createUser } from '../requests/users';

function LoginOrCreate() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    authorization: {
      setAuth,
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
    <div>
      <form>
        <input type="text" name="email" value={loginInfo.email} onChange={onChange} />
        <input type="password" name="password" value={loginInfo.password} onChange={onChange} />
        <button type="button" disabled={valid} onClick={pathname === '/' ? loginAndSaveToken : createAndSaveToken}>Login</button>
      </form>
    </div>
  );
}

export default LoginOrCreate;
