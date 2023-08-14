import "./SideEffect.css"

function Post(props) {
    console.log(props.isCompact)
    return ( 
    <div className=".box" style={{backgroundColor:"silver", display:props.isCompact?"block":"inline-block", width:props.isCompact?"100%":200, height:400, margin: 5, alignSelf:"start"}}>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <h5>{props.isCompact?"small":"big"}</h5>
    </div>
     );
}

export default Post;