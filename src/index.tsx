import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import addToast, { Position, Type } from './toast';

ReactDOM.render(<App />, document.getElementById('root'));

declare var toast: (m: string, p: Position, t: Type) => void;

toast = (m: string, p: Position, t: Type) => addToast(m, p, t);
