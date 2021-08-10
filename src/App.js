import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import asyncHandler from './utils/asyncHandler';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
        asyncHandler('https://my-json-server.typicode.com/typicode/demo/posts').then(res => {
          setData(res);
        },() => {
          setData([]);
        });
    },[]);
  function buildData(){
    return (
            <ul>
                {data.map(function(data, index){
                    return <li key={ index }>{data.title}</li>;
                  })}
            </ul>
        )
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {buildData()}
      </header>
    </div>
  );
}

export default App;
