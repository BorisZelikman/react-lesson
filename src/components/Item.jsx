export default function Item (props){
    const price=props.record.price *(props.shouldDiscount?(1-props.record.discount):1);
    return(
        <div key={props.record.item}>{props.record.item}: ${price}</div>
    )
}