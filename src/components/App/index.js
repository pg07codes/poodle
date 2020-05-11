import React from 'react';
import Search from '../Search';
import ShortNews from '../ShortNews'
import CustomBackground from '../CustomBackground'
import Notepad from '../Notepad'

function App() {

  return (
    <div>
      <Search />
      <Notepad/>
      <ShortNews/>
      <CustomBackground />
    </div>
  );
}

export default App;
