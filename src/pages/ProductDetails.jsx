import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import useFetch from "../utilities/useFetch";
import Loader from "./Loader";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { get, loading } = useFetch(
    "https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/"
  );

  useEffect(() => {
    get(`productdetails/id${id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [get, id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        product && (
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <img src={product.image} width="100" alt={product.name} />
            <p>
              View{" "}
              <Link
                to={`/products/${id}/delivery`}
                className="text-blue-500 underline cursor-pointer"
              >
                delivery notes
              </Link>
            </p>
            <Outlet />
          </div>
        )
      )}
    </div>
  );
}
