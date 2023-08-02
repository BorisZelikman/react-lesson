export default function Contatct(props){
    return <div onClick={()=>{props.displayConvo(props.text)}}>{props.text}</div>   
}