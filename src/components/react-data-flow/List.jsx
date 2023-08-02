import Contatct from "./Contact"

export default function List(params){
    return (
        params.people.map((name, index) => (<Contatct key={index} text={name} displayConvo={params.displayConvo}/>))
    )
}