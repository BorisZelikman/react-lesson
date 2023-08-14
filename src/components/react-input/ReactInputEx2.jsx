
import { useState, useEffect } from 'react';

const ReactInputEx2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");
    useEffect(()=>console.log(`${name} selected ${fruit}`))

    const handleSelectChanhed =(e)=>{
        setFruit(e.target.value)
            
        }
    

    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={handleSelectChanhed} value={fruit}>
                <option value="apple">Apple</option>
                <option value="peach">Peach</option>
                <option value="orange">Orange</option>
            </select>
        </div>
    );
}
export default ReactInputEx2;
