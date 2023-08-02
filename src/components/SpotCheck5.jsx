import  { useState } from 'react';
export default function SpotCheck5() {
    const [counter, setCounter]=useState(0);
    const increaseCounter=()=>setCounter(counter+1);
    
return (
    <>
    <div>{counter}</div>
    <button onClick={increaseCounter}>👍</button>
    </>
)
}
