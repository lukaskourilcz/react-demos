function ProductInfo() {
  const product = {
    name: "Laptop",
    price: "$1200",
    availability: "In stock",
  };

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.availability}</p>

    </div>
  );
}

export default ProductInfo;
