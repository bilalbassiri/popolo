import React, { useState, useEffect } from 'react'
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import Message from './Message';
import Loading from './Loading';
import db from '../firebase/config';
import firebase from "firebase";


function Room({ currentTheme, currentUserName, usersColor, currentUserMainColor }) {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [start, setStart] = useState(false)
    const [isScrollDownBtnEnd, setScrollStatus] = useState(false)

    let getFirstText = index => {
        return messages[index]?.name !== messages[index - 1]?.name
    }
    let getLastText = index => {
        return messages[index]?.name !== messages[index + 1]?.name
    }
    let scrollDown = () => {
        document.getElementById('msg-block-id').scrollTop = document.getElementById('msg-block-id').scrollHeight
    }
    let sendMessage = (e) => {
        e.preventDefault()
        db.collection('messages').add(
            {
                name: currentUserName,
                text: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                color: usersColor,
                day: new Date().getDay()
            });
        setInput('')
        scrollDown()
    }
    useEffect(() => {
        setTimeout(() => {
            setStart(true)
        }, 2000);
        db.collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snp => {
                setMessages(snp.docs.map(doc => doc.data()))
            })
    }, [])
    return (
        start ?
            <div className='room'>
                {
                    !isScrollDownBtnEnd && messages.length > 10?
                        <div className='arrow-down'
                            style={currentTheme.downBtn}
                            onClick={scrollDown}>
                            <KeyboardArrowDownOutlinedIcon className='down-icon' />
                        </div>
                        : null
                }
                <div className='messages-block' id='msg-block-id'
                    onScroll={e => setScrollStatus(e.target.scrollHeight - Math.abs(e.target.scrollTop) < 2 * e.target.clientHeight)}>
                        {
                            messages.map((msg, i) =>
                                    <Message 
                                    key={i}
                                    index={i}
                                    message={msg}
                                    messages={messages}
                                    currentUserName={currentUserName}
                                    first={getFirstText(i)}
                                    last={getLastText(i)}
                                    currentUserMainColor={currentUserMainColor}
                                    currentTheme={currentTheme} />
                            )
                        }
                </div>

                <form onSubmit={e => {
                    sendMessage(e)
                }}
                    style={currentTheme.messageArea}>
                    <input value={input} type='text' placeholder='Write a message...' autoFocus={true} onChange={e =>
                        setInput(e.target.value)
                    }
                    />
                    <button type='submit' disabled={!input} className={!input ? 'fade' : ''}>
                        <SendIcon className="send-icon" style={{ color: currentUserMainColor }} />
                    </button>
                </form>
            </div>
            :
            <Loading currentUserMainColor={currentUserMainColor} />
    )
}

export default Room
