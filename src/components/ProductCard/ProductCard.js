import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>Ver detalle</Link>
    </article>
  );
}