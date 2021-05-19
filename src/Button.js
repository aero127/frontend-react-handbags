function Button(props) {
    return (<button type="button" onClick={() => console.log(props.text)}>{props.text}</button>)
}
export default Button;