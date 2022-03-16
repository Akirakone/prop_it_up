
import './App.css';
import React from 'react';

import ClassProp from './components/ClassProp'

function App() {
  return (
    <div className="App">
      <ClassProp lastName="kone"firstName="akira" age={24} hairColor="brown" />
      <ClassProp lastName="kone"firstName="ousmane" age={28} hairColor="brown" />
      <ClassProp lastName="ly"firstName="rose" age={60} hairColor="brown" />
    </div>
  );
}

export default App;
