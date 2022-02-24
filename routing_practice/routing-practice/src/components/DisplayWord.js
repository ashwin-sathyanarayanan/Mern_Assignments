const DisplayWord = (props) => {
    console.log(props)
    return ( 
    <div style={{backgroundColor: props.color2}}>
        <h1 style={{color: props.color1}}>The word is: {props.word}</h1>
    </div> );
}

export default DisplayWord;