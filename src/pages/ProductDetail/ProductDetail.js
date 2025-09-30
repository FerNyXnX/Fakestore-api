import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import ErrorState from "../../components/ErrorState/ErrorState";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`/products/${id}`, [id]);

  if (loading) return <Loading />;
  if (error || !product) return <ErrorState message="Producto no encontrado" />;

  return (
    <article>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </article>
  );
}