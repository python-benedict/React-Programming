// How to use map in react

export default function Mapp1() {
    const fruits = ["mango","banana","potatoes"]
    const fruitsList = fruits.map((fruit, index)=> <h3 key="{index}">{fruit}</h3>)
    return <div>{fruitsList}</div>
}