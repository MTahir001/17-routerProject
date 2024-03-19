import { useParams, Link } from "react-router-dom";
export default function ProductDetails() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        GO Back
      </Link>
    </>
  );
}
