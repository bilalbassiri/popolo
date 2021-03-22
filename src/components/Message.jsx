import React from 'react'
import Avatar from '@material-ui/core/Avatar';

function Message({ currentTheme, message, messages, currentUserName, first, last, currentUserMainColor, index }) {
    const { timestamp } = message
    const isCurrentUser = currentUserName === message.name;
    const msgStyle = [
        'msg',
        last ? (isCurrentUser ? 'last-msg-sender' : 'last-msg-others') : ''
    ]
    const fleshStyle = {
        borderRight: `10px solid ${isCurrentUser ? currentUserMainColor : currentTheme.textMessage.backgroundColor}`,
        transform: `rotateY(${isCurrentUser ? .5 : 0}turn)`,
    }
    let getTime = tms => {
        let t = new Date(tms?.toDate())

        return tms ? `${t.getHours() < 10 ? '0' : ''}${t.getHours()}:${t.getMinutes() < 10 ? '0' : ''}${t.getMinutes()}`
            : '00:00'
    }
    let getReadableDate = d => {
        return new Date(d).toDateString()
    }
    let getLastMessageDate = () => {
        let today = new Date().getDate();
        if (messages[index]?.date === today) return 'Today'
        if (today - 1 === messages[index]?.date) return 'Yesterday'
        return getReadableDate(timestamp?.toDate())
    }
    let isFirstDayMessage = messages[index]?.date !== messages[index - 1]?.date
    return (
        <>
            { isFirstDayMessage ?
                <div style={currentTheme.date}
                    className='day-first-ms-date'>{getLastMessageDate()}</div>
                : null
            }
            <div className='msg-container' style={{ float: isCurrentUser ? 'right' : 'initial', marginTop: first && !isCurrentUser ? '10px' : '0px' }}>
                <div className='avatar-container'>
                    <Avatar className='avatar' style={{ backgroundColor: message.color, visibility: last && !isCurrentUser ? 'visible' : 'hidden' }}>{message.name[0].toUpperCase()}</Avatar>
                </div>
                <div className={msgStyle.join(' ')} style={{ backgroundColor: isCurrentUser ? currentUserMainColor : currentTheme.textMessage.backgroundColor, color: isCurrentUser ? 'white' : currentTheme.textMessage.textColor }}>
                    <div style={{ color: message.color, display: first && !isCurrentUser ? 'block' : 'none' }} className='name'>{message.name}</div>
                    <div className='text'>
                        <p>{message.text}
                            <time className='time' style={isCurrentUser ? { color: 'white', opacity: '.7' } : { color: 'rgb(153 153 153)' }} role='time'>
                                {getTime(timestamp)}
                            </time>
                        </p>
                    </div>
                    {
                        last ? <div className='flesh' style={fleshStyle}>
                        </div> : null
                    }
                </div>
            </div>

        </>

    )
}

export default Message
