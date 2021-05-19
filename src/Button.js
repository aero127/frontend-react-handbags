function Button(props) {
    return (<button type="button" disabled={(props.disabled)} onClick={() => console.log(props.text)}>{props.text}</button>)
}
export default Button;