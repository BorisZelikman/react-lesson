import {useState, useEffect} from "react";
function Watches() {
    const [time, setTime] =useState(new Date())
    const [timeoutId,setTimeoutId]=useState(null)
    const oo=(val)=>String(val).padStart(2,"0")

    useEffect(()=>{
       const tId=setTimeout(() => {
        setTime(new Date())
       }, 1000); 
       setTimeoutId(tId)
    //    return ()=>clearTimeout(timeoutId)
    },[time])
    return (<div>{oo(time.getHours())}:{oo(time.getMinutes())}:{oo(time.getSeconds())}</div>);
}

export default Watches;