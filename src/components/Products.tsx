import LaptopImage from "../assets/images/laptop-image.png";

interface Product {
  name: string;
  price: number;
  image: string;
}

const Products = () => {
  const products: Product[] = [
    { name: "Ноутбук X", price: 55990, image: LaptopImage },
    { name: "Ноутбук Y", price: 72500, image: LaptopImage },
    { name: "Ноутбук Z", price: 45990, image: LaptopImage },
    { name: "Ноутбук A", price: 92990, image: LaptopImage },
  ];
  return (
    <section className="products">
      <h2 className="products-title">Популярные товары</h2>
      <div className="product-cards">
        {products.map(({ name, price, image }: Product, index) => (
          <div key={index} className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price} сом</p>
            <button>В корзину</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
