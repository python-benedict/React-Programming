// How to use map in react

export default function Mapp() {
    const products = [
        {id:1, name:"laptop", price:500},
        {id:2, name:"Modem", price:400},
        {id:3, name:"Phone", price:200},
        {id:4, name:"laptop", price:9500},
]
    const productsList = products.map((product)=> (<h3 key="{product.id}">{product.name}: ${product.price}</h3>))
    return <div>{productsList}</div>
}