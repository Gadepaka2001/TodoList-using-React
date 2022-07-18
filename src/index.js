import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoLists from './Components/TodoLists';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoLists />
  </React.StrictMode>
);


reportWebVitals();
