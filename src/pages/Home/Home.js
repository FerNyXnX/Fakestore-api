import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useCategories } from "../../hooks/useCategories";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import Loading from "../../components/Loading/Loading";
import ErrorState from "../../components/ErrorState/ErrorState";

export default function Home() {
  const [cat, setCat] = useState();
  const { categories, loading: loadingCats } = useCategories();
  const { products, loading, error } = useProducts(cat);

  if (loading || loadingCats) return <Loading />;
  if (error) return <ErrorState message="Error cargando productos" />;

  return (
    <section>
      <h2>Productos</h2>
      <CategoryFilter categories={categories} selected={cat} onChange={setCat} />
      <ul>
        {products.map(p => (
          <li key={p.id}><ProductCard product={p} /></li>
        ))}
      </ul>
    </section>
  );
}