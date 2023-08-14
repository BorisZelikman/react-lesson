import { useState, useEffect } from "react";

function ClickReminder() {
    const [timeoutId, setTimeoutId] = useState(null)

  const clickHandler = () => {
    console.log('clearing timeout');
    clearTimeout(timeoutId)
  }

  useEffect(() => {
    let timeoutId = setTimeout(()=>{alert("remember to click")}, 2000)
    setTimeoutId(timeoutId)
    
     return () => {
       clearTimeout(timeoutId)
     }
  }, [])

    return ( <button onClick={clickHandler}>Dont forget to click in 2s</button> );
}

export default ClickReminder;