import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';

function Message({ currentTheme, message, messages, currentUserName, first, last, currentUserMainColor, index }) {
    const { timestamp } = message
    const isCurrentUser = currentUserName === message.name;
    const msgStyle = [
        'msg',
        last ? (isCurrentUser ? 'last-msg-sender' : 'last-msg-others') : ''
    ]
    let getTime = tms => {
        let t = new Date(tms?.toDate())

        return tms ? `${t.getHours() < 10 ? '0' : ''}${t.getHours()}:${t.getMinutes() < 10 ? '0' : ''}${t.getMinutes()}`
            : '00:00'
    }
    let getReadableDate = d => {
        return new Date(d).toDateString()
    }
    let isFirstDayMessage = messages[index]?.day !== messages[index - 1]?.day
    return (
        <>
            { isFirstDayMessage ?
                <div style={currentTheme.date}
                    className='day-first-ms-date'>{getReadableDate(timestamp?.toDate().toString())}
                </div>
                : null
            }
            <div className='msg-container' style={{ float: isCurrentUser ? 'right' : 'initial', marginTop: first && !isCurrentUser ? '10px' : '0px' }}>
                <div className='avatar-container'>
                    <Avatar className='avatar' style={{ backgroundColor: message.color, visibility: last && !isCurrentUser ? 'visible' : 'hidden' }}>{message.name[0].toUpperCase()}</Avatar>
                </div>
                <div className={msgStyle.join(' ')} style={{ backgroundColor: isCurrentUser ? currentUserMainColor : currentTheme.textMessage.backgroundColor, color: isCurrentUser ? 'white' : currentTheme.textMessage.textColor }}>
                    <div style={{ color: message.color, display: first && !isCurrentUser ? 'block' : 'none' }} className='name'> {message.name}  </div>
                    <div className='text'>
                        <p>{message.text}
                            <time className='time' style={isCurrentUser ? { color: 'white', opacity: '.7' } : { color: 'rgb(153 153 153)' }} role='time'>
                                {getTime(timestamp)}
                            </time>
                        </p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Message
