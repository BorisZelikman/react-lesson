import { useState } from "react"
import Item from "./Item";
export default function Home(props){
    if (props===undefined) return <div>!!!!</div>;
    return props.store.map(i=><Item record={i} shouldDiscount={props.shouldDiscount}/>)
}