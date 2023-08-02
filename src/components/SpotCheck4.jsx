import React, { useState } from 'react';

const Hot=() => <div key="Hot">I'm feeling too hot!</div>        
const Cold=() => <div key="Cold">It's too cold in here!</div>        

function SpotCheck4 (){
    const [state, setState] = useState(Hot)
    const switchState=()=>setState( state.key==="Hot"?Cold:Hot)
    return (
    <>
      {state}
      <button onClick={switchState}></button>
    </>
    );
}
 
export default SpotCheck4;