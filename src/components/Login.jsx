import React, { useState } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import CheckIcon from '@material-ui/icons/Check';
import palette from '../utils/palette'

function Login({ currentTheme, setCurrentUserName, setColor, currentUserMainColor }) {

    const [input, setInput] = useState('');
    let handleChangedColor = e => {
        setColor(e.target.style.backgroundColor)
    }
    let getCheckedColor = i => {
        return palette[i] === currentUserMainColor ? "visible" : "hidden";
    }

    return (
        <div className='login'>
            <div className="info" style={currentTheme.info}>
                <p>Enter your name, pick your favorite color and start texting other popolo</p>
                <h4>Enjoy it !</h4>
            </div>
            <form onSubmit={e => {
                e.preventDefault();
                setCurrentUserName(input)

            }}>
                <input
                    style={currentTheme.nameInput}
                    type='text'
                    placeholder='Your name or nickname'
                    autoFocus={true}
                    onChange={
                        e => setInput(e.target.value.slice(0, 10))
                    } />
                <button type='submit'style={{ opacity: input ? '1' : '0', border: currentTheme.doneBtn.border }}>
                        <DoneIcon style={{ fontSize: '1.2rem', color: currentTheme.doneBtn.color }} />
                </button>
            </form>
            <div className='palette'>
                {
                    palette.map((x, i) =>
                        <div style={{ backgroundColor: x }} onClick={handleChangedColor} key={i}>
                            <CheckIcon className="check-icon" style={{ visibility: getCheckedColor(i) }} />
                        </div>
                    )
                }
            </div>
            <div className='github'>
                <a rel="noreferrer" target="_blank" href="https://github.com/bilalbassiri" style={currentTheme.github}>
                    On Github
                </a>
            </div>
        </div>
    )
}

export default Login
