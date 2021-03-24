const getTheme = isDark => {
    return {
        theme: isDark? 'dark' : 'light',
        bgColor: isDark ? '#181D15' : 'white',
        textColor: isDark ? 'white' : '#181D15',
        titleColor: isDark ? '#cdcdcd' : '#535353',
        nameInput: isDark ? { backgroundColor: '#343d44' }
            : { border: '1px solid #D5D5D5' },
        doneBtn: {
            border:  `1px solid ${isDark? 'white' : '#181D15'}`,
            color: isDark ? 'white' : '#181D15'
        },
        messageArea: isDark ? { backgroundColor: '#282e33' }
            : {
                backgroundColor: 'white',
                border: '1px solid rgb(156 156 156)'
            },
        textMessage: {
            backgroundColor: isDark? '#343a40' : '#e7e7e7'
        },
        info: {
            color: isDark? '#cfcfcf' : '#535353'
        },
        github: {
            color: isDark? 'rgb(183 183 183)' : 'rgb(140 140 140)'
        },
        date: {
            backgroundColor: isDark? '#2f343a' : 'rgb(184 194 191)',
            color: 'white'
        },
        downBtn: {
            backgroundColor: isDark? '#181D15' : 'white',
            boxShadow:  `0px 0px 2px 0px ${isDark? '#838383':'#707070'}`
        },
        flesh: {
            borderRight: '10px solid #e7e7e7',
        }
    }
}

export default getTheme;