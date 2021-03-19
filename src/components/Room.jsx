import React, { useState, useEffect } from 'react'
import SendIcon from '@material-ui/icons/Send';
import Message from './Message';
import Loading from './Loading';
import db from '../firebase/config';
import firebase from "firebase";


function Room({ currentTheme, currentUserName, usersColor, currentUserMainColor }) {

    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [start, setStart] = useState(false)

    let getFirstText = index => {
        return messages[index]?.name !== messages[index - 1]?.name ? true : false
    }
    let getLastText = index => {
        return ((messages[index]?.name === messages[index - 1]?.name || messages[index]?.name !== messages[index - 1]?.name)
            && messages[index]?.name !== messages[index + 1]?.name) ? true : false
    }
    let sendMessage = (e) => {
        db.collection('messages').add(
            {
                name: currentUserName,
                text: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                color: usersColor
            });
        setInput('')
        e.preventDefault();
        document.getElementById('msgsId').scrollTop = document.getElementById('msgsId').scrollHeight;

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
                <div className='messages-block' id='msgsId'>
                    {
                        messages.map((msg, i) =>
                            <Message
                                message={msg}
                                key={i}
                                currentUserName={currentUserName}
                                first={getFirstText(i)}
                                last={getLastText(i)}
                                currentUserMainColor={currentUserMainColor}
                                currentTheme={currentTheme}
                            />
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
