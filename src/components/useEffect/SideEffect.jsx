import { useState, useEffect  } from "react";
import "./SideEffect.css"
import ClickReminder from "./ClickReminder";
function SideEffect() {
    const [titleIndex, setTitleIndex]=useState(0);
    const [size, setSize]=useState(100);
    const [titles, setTitles]=useState([])
    const [timerId, setTimerId]=useState(null)

    function getColors() {
        return Promise.resolve()
          .then(() => ["green", "blue", "pink", "purple", "gold", "white"])
      }
    const updateSize=()=>{setSize(size+20)}
    const updateTitle=()=>{
        console.log(titleIndex);
        setTitleIndex(titleIndex<titles.length-1?titleIndex+1:0);
    }
    useEffect(()=>{
        const getData= async()=>{
         let colors=await getColors();
          setTitles(colors)
        }
        getData();       
      }, [])
    // useEffect(()=>{
    //     getColors().then((colors)=>{
    //       setTitles(colors)
    //     })
    //   }, [])
    useEffect(()=>{
        setTimeout(updateTitle,1000)
    },[titleIndex])

    return (  
        <>
        <ClickReminder/>
        <button onClick={updateSize}>+</button>
      <div>
        <div className="box" style={{width:size, height:size}}>{titles[titleIndex]}</div>
      </div>
      </>
      );
}

export default SideEffect;