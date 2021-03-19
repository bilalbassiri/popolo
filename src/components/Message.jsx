import React from 'react'
import Avatar from '@material-ui/core/Avatar';

function Message({ currentTheme ,message, currentUserName, first, last, currentUserMainColor }) {
    
    const isCurrentUser = currentUserName === message.name;
    const msgStyle = [
        'msg',
        last ? (isCurrentUser ? 'last-msg-sender' : 'last-msg-others') : ''
    ]

    return (
        <div className='msg-container' style={{ float: isCurrentUser ? 'right' : 'initial', marginTop: first && !isCurrentUser ? '10px' : '0px' }}>
            <div className='avatar-container'>
                <Avatar className='avatar' style={{backgroundColor: message.color, visibility: last && !isCurrentUser ? 'visible' : 'hidden'}}>{message.name[0].toUpperCase()}</Avatar>
            </div>
            <div className={msgStyle.join(' ')} style={{backgroundColor: isCurrentUser? currentUserMainColor : currentTheme.textMessage.backgroundColor, color: isCurrentUser? 'white' : currentTheme.textMessage.textColor}}>
                <div style={{color: message.color,  display: first && !isCurrentUser ? 'block' : 'none' }} className='name'> {message.name}  </div>
                <div className='text'>
                    <p>{message.text}</p>
                </div>
                <div className='triangle'>

                </div>
            </div>
        </div>

    )
}

export default Message
