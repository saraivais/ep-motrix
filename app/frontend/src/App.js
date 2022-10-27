import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

async function getProducts() {
  fetch('http://localhost:3011/products').then((response) => response.json()).then((data) => console.log(data));
  // http://localhost:3011/products
  // console.log('resultado foi esse', response);
  // return response;
  // const APIData = await response.json();
  // console.log('dps do json', APIData);
  // return APIData;
}


function App() {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
