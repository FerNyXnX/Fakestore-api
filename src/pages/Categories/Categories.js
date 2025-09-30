import { useCategories } from "../../hooks/useCategories";
import Loading from "../../components/Loading/Loading";
import ErrorState from "../../components/ErrorState/ErrorState";

export default function Categories() {
  const { categories, loading, error } = useCategories();

  if (loading) return <Loading />;
  if (error) return <ErrorState message="Error cargando categorías" />;

  return (
    <section>
      <h2>Categorías</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </section>
  );
}