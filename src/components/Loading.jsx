import React from 'react'

function Loading({ currentUserMainColor }) {
    const style = { backgroundColor: currentUserMainColor }
    return (
        <div className='spiner'>
            <div style={style}>
            </div>
            <div style={style}>
            </div>
            <div style={style}>
            </div>
        </div>
    )
} 

export default Loading
