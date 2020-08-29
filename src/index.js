import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));

const setBg = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};
document.querySelectorAll('.Statistics_item__1Bt9Z').forEach(li => {
  li.style.background = '#' + setBg();
});
