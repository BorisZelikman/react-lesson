export default function Landing(props){
    const name=props.user;
    const hottest=props.store.filter(i=>i.hottest)[0];
    return <div>Welcome, {name}. The hottest item is {hottest.item} for ${hottest.price}</div>
}