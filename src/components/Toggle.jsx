import React from 'react'
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

function Toggle({ isDark, setDark }) {
    return (
        <div className="toggle">
            <input type="checkbox" id='toggle' onChange={e => setDark(e.target.checked)} />
            <div>
                {
                    isDark ?
                        <Brightness3Icon className="mode-icon" />
                        :
                        <WbSunnyIcon className="mode-icon" />
                }
            </div>
        </div>
    )
}

export default Toggle
