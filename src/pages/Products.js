import { Link } from "react-router-dom";
export default function Products() {
  const products = [
    { id: "P1", title: "Product 1" },
    { id: "P2", title: "Product 2" },
    { id: "P3", title: "Product 3" },
  ];
  return (
    <>
      <h1>Products Page</h1>
      {products.map((prod) => {
        return (
          <li key={prod.id}>
            <Link to={`products/${prod.id}`}>{prod.title}</Link>
          </li>
        );
      })}
    </>
  );
}
