import React, { useContext } from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import { UserContext, ThemeContext } from '../contexts/Contexts'


function Logo() {
    const { currentUserMainColor } = useContext(UserContext)
    const { currentTheme } = useContext(ThemeContext)
    return (
        <div className='header-logo' style={{ color: currentTheme.titleColor }}>
            <div className='logo-container'>
                <ChatIcon className='chat-icon' style={{ color: currentUserMainColor }} />
                <h1>popolo</h1>
            </div>
        </div>
    )
}

export default Logo
