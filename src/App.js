import { Login, Room, Logo, Toggle } from './components/index';
import React, { useState, useEffect } from 'react';
import { mainColor } from './utils/randomColor';
import palette from './utils/palette';
import getTheme from './utils/themes';
import { ThemeProvider, UserProvider } from './contexts/Contexts';

function App() {
  const [currentUserMainColor, setCurrentUserMainColor] = useState(mainColor)
  const [currentUserName, setCurrentUserName] = useState('');
  const [isDark, setDark] = useState(false)
  let currentTheme = getTheme(isDark)
  useEffect(() => {
    if (!palette.includes(currentUserMainColor)) setCurrentUserMainColor(palette[0])
  }, [currentUserMainColor])
  return (
    <ThemeProvider value={{isDark, setDark, currentTheme }}>
      <div className="App" style={{ backgroundColor: currentTheme.bgColor, color: currentTheme.textColor }}>
        <Toggle/>
        <UserProvider value={{ currentUserName, currentUserMainColor }}>
          <Logo />
          {
            !currentUserName ?
              <Login
                setCurrentUserName={setCurrentUserName}
                setCurrentUserMainColor={setCurrentUserMainColor} />
              :
              <Room />
          }
        </UserProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
