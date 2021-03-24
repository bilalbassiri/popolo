import React, { useState, useContext } from 'react';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import CheckIcon from '@material-ui/icons/Check';
import palette from '../utils/palette'
import { UserContext, ThemeContext } from '../contexts/Contexts';

function Login({ setCurrentUserName, setCurrentUserMainColor }) {
    const [input, setInput] = useState('');

    const { currentUserMainColor } = useContext(UserContext)
    const { currentTheme } = useContext(ThemeContext)

    const handleChangedColor = e => setCurrentUserMainColor(e.target.style.backgroundColor)
    const getCheckedColor = i => palette[i] === currentUserMainColor ? "visible" : "hidden"
    

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
                    id='name-field'
                    style={currentTheme.nameInput}
                    type='text'
                    placeholder='Your name or nickname'
                    autoFocus={true}
                    onChange={e => setInput(e.target.value.slice(0, 10))} />
                <div className='palette'>
                    {
                        palette.map((x, i) =>
                            <div style={{ backgroundColor: x }} onClick={handleChangedColor} key={i}>
                                <CheckIcon className="check-icon" style={{ visibility: getCheckedColor(i) }} />
                            </div>
                        )
                    }
                </div>
                <button type='submit' name='start'
                    style={{ border: currentTheme.doneBtn.border }}
                    onClick={e => document.getElementById('name-field').focus()}>
                    <ArrowForwardRoundedIcon style={{ fontSize: '1.2rem', color: currentTheme.doneBtn.color }} />
                </button>
            </form>

            <div className='github'>
                <a rel="noreferrer" target="_blank" href="https://github.com/bilalbassiri/popolo" style={currentTheme.github}>
                    On Github
                </a>
            </div>
        </div>
    )
}

export default Login
