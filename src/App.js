import React from 'react';
import './App.scss';
import Editor from './features/Editor.js';
import Prewiew from './features/Prewiew.js';


function App() {

return (
  <div>
      <div id="app">
      <Editor />
      <Prewiew />
      </div>
  </div>
)
}

export default App;
