import React from 'react';
import './App.scss';
import Editor from './features/Editor.js';
import Prewiew from './features/Prewiew.js';
import { marked } from "marked";


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
