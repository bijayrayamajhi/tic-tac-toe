
const Square = (props) => {
    return (
        <div 
        onClick={props.onClick}
        className="square" 
        style={{ border: "1px solid black",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
         }} >
            <h4> {props.value} </h4>
        </div>
    )
}

export default Square ;