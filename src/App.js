import { Login, Room, Logo, Toggle } from './components/index';
import React, { useState, useEffect } from 'react';
import { mainColor, usersColor } from './utils/randomColor';
import palette from './utils/palette';
import themes from './utils/themes';

function App() {
  const usersOtherViewColor = usersColor;
  const [currentUserMainColor, setCurrentUserMainColor] = useState(mainColor)
  const [_currentUserName, setCurrentUserName] = useState('');
  const [isDark, setDark] = useState(false)
  let currentTheme = isDark ? themes.dark : themes.light;
  useEffect(() => {
    if( !palette.includes(currentUserMainColor) ) setCurrentUserMainColor(palette[0])
  }, [currentUserMainColor])
  return (
    <div className="App" style={{ backgroundColor: currentTheme.bgColor, color: currentTheme.textColor }}>
      <Toggle isDark={isDark} setDark={setDark} />
      <Logo currentTheme={currentTheme} currentUserMainColor={currentUserMainColor} currentUserName={_currentUserName}/>
      {
        !_currentUserName ?
          <Login currentTheme={currentTheme}
                 setCurrentUserName={setCurrentUserName}
                 setCurrentUserMainColor ={setCurrentUserMainColor}
                 currentUserMainColor={currentUserMainColor} />
          :
          <Room  currentTheme={currentTheme}
                 currentUserName={_currentUserName}
                 usersOtherViewColor={usersOtherViewColor} 
                 currentUserMainColor={currentUserMainColor} />
      }
    </div>
  );
}

export default App;
