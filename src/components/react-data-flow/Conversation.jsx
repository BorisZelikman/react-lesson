export default function Conversation(props){
    console.log (props)
    return(
        <>
        <button class="back" onClick={()=>props.displayConvo(null)}>Back</button>
        {props.convo.map((item, index) => 
            <div key={index}>
                <span class="sender">{item.sender==="self"?"Me":props.sender}:</span> 
                {item.text}
            </div>)}
        </>
    )
}