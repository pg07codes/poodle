import React from 'react';
import Search from '../Search';
import ShortNews from '../ShortNews'
import CustomBackground from '../CustomBackground'
import Notepad from '../Notepad'
import Shortcuts from '../Shortcuts'


function App() {

  return (
    <div>
      <Search />
      <Shortcuts />
      <Notepad />
      <ShortNews />
      <CustomBackground />
    </div>
  );
}

export default App;
