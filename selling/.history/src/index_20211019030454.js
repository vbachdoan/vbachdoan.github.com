import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


var a = "vuong dep trai";

function check(){
  console.log(a);
}
check()
console.log(a);