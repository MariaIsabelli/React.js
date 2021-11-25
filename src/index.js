import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from './components/Header';
import home from './components/home';
import footer from '.components/footer';


ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__conteiner">
      <Header/>
      <home/>
      <footer/>

    </div>
  </div>
  ,
  document.getElementById('root')
);


