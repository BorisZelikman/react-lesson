import { useState } from "react";
import Home from "./Home";
import Landing from "./Landing";
export default function(){
    const [state, setState]=useState({
        user: "Robyn",
        store: [
          { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
          { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
          { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
        ],
        shouldDiscount: true,
        currentPage: "Landing"
      })
    

     const page= state.currentPage==="Landing"?
        <Landing store={state.store} user={state.user}/>
        :<>
        <h4>Store</h4>
        <Home store={state.store} shouldDiscount={state.shouldDiscount}/>)
        </>

     const changePage=()=>{
        const copy = {...state}
        copy.currentPage= copy.currentPage==="Landing"?"Store":"Landing";
        setState(copy);
     }   

     const changeDiscountVisability = ()=>{
        const copy = {...state}
        copy.shouldDiscount= !copy.shouldDiscount
        setState(copy);
     }

    return(<>
    <h1>Exercise 2</h1>
    <button onClick={changePage}>Change Page</button>
    <input type="checkbox" checked={state.shouldDiscount } onChange={changeDiscountVisability}></input>
    {page}
    </>)
}