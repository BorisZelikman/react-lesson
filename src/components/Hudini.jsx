import { useState } from 'react';
export default function Hudini(){
    const [show, setShow]=useState(false);
    const switchShow = ()=>setShow(!show)
    return(
    <>
        <div>{show?"Now you see me":"Now you don’t"}</div>
        <button onClick={switchShow}>{show?"Hide":"Show"}</button>
    </>
    )
}
