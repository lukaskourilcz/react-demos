const products = [
    {id: 1, name: "phone", price: "$999"},
    {id: 2, name: "tv", price: "$9199"},
    {id: 3, name: "radio", price: "$99"},
    {id: 4, name: "momma", price: "$19"},

]

const ProductList = () => {
  return (
    <div>
        {products.map(({id, name, price}) => (
            <ul key={id}>
                <li>{name}</li>
                <li>{price}</li>
            </ul>
        ))}
    </div>
  )
}

export default ProductList