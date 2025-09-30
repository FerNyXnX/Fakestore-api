import { useCart } from "../../hooks/useCart";
import Loading from "../../components/Loading/Loading";

export default function Cart() {
  const { cart, loading } = useCart(1);

  if (loading) return <Loading />;
  if (!cart) return <p>No tienes productos en el carrito.</p>;

  return (
    <section>
      <h2>Tu carrito</h2>
      <ul>
        {cart.products.map(item => (
          <li key={item.productId}>
            Producto #{item.productId} — Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
    </section>
  );
}