import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';


function Logo( { currentTheme, currentUserMainColor }) {
    return (
        <div className='header-logo' style={{color: currentTheme.titleColor}}>
            <div className='logo-container'>
                <ChatIcon className='chat-icon' style={{color: currentUserMainColor}}/>
                <h1>popolo</h1>
                <p>Texting app..</p>
            </div>
        </div>
    )
}

export default Logo
