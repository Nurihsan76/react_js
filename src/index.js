// import './index.css';
// import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import Lifecycle from './reactjsdasar/Lifecycle';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Timer from './reactjsdasar/Timer';
import Crud from './crud';
// import StateProps from './reactjsdasar/StateProps';
// import Map from './reactjsdasar/Map';
// import { Variabel } from './reactjsdasar/Variabel';
// import App from './reactjsdasar/App';
ReactDOM.render(
  <React.StrictMode>
{/* <App />   */}
{/* <Variabel /> */}
{/* <StateProps /> */}
{/* <Map /> */}
{/* <Lifecycle /> */}
<Crud />
{/* <Timer start="0"/> */}
</React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
