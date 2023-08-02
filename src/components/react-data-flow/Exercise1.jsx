import React, {useState} from 'react';
export default function Exercise1(){
    const data={
        images: [
          "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
          "https://m.media-amazon.com/images/I/51T3025eGcL._AC_UF1000,1000_QL80_.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImg: 1
      }
    
    const [state, setState]=useState(data)

    const showCurrentImage=state.images[state.currentImg]
    const shiftImagForward = ()=> {
        let newData={...state};
        if (newData.currentImg < newData.images.length-1) newData.currentImg+=1;
        setState(newData)
    }
    const shiftImagBack = ()=> {
        const newData={...state};
        if (newData.currentImg > 0) newData.currentImg=newData.currentImg-1;
        setState(newData)
        console.log(newData, state)
    }
    return(
        <>
            <button class="previous" onClick={shiftImagBack}>Previous</button>
            <img src={showCurrentImage} height="250"/>
            <button class="forward"  onClick={shiftImagForward}>Next</button>
        </>
    )
}