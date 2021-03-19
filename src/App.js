import { Login, Room, Logo, Toggle } from './components/index';
import React, { useState } from 'react';
import getRandomColor from './utils/randomColor';
import themes from './utils/themes';

function App() {
  const usersOtherViewColor = getRandomColor();
  const [currentUserMainColor, setCurrentUserMainColor] = useState('rgb(27, 196, 163)')
  const [_currentUserName, setCurrentUserName] = useState('');
  const [isDark, setDark] = useState(false)
  let currentTheme = isDark ? themes.dark : themes.light;
  return (
    <div className="App" style={{ backgroundColor: currentTheme.bgColor, color: currentTheme.textColor }}>
      <Toggle isDark={isDark} setDark={setDark} />
      <Logo currentTheme={currentTheme} currentUserMainColor={currentUserMainColor} />
      {
        !_currentUserName ?
          <Login currentTheme={currentTheme}
                 setCurrentUserName={setCurrentUserName}
                 setColor={setCurrentUserMainColor}
                 currentUserMainColor={currentUserMainColor} />
          :
          <Room  currentTheme={currentTheme}
                 currentUserName={_currentUserName}
                 usersColor={usersOtherViewColor} 
                 currentUserMainColor={currentUserMainColor} />
      }
    </div>
  );
}

export default App;
