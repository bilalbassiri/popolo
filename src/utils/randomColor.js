let colors = [
        '#b693da',
        '#70CAD1',
        '#A4B0F5',
        '#5aca9d',
        '#f57a8a',
        '#f32477',
        '#a8e726',
        '#6290C3',
        '#995D81',
        '#3581B8',
        '#7bc862',
        '#65aadd',
        '#6ec9cb',
        '#eda86c',
        '#a695e7',
        '#e17076'
];

let getRandomColor = ()=> {
    let r = Math.floor(Math.random()*colors.length);
    return colors[r]
}

export default getRandomColor;