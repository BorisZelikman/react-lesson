import "./Ex2-Post.css"

function Post(props) {
    console.log(props.isCompact)
    return ( 
     <div className={`box2 ${props.isCompact?"small":"big"}`} >
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <h5>{props.isCompact?"small":"big"}</h5>
    </div>
     );
}

export default Post;