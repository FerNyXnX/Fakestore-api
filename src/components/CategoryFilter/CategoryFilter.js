export default function CategoryFilter({ categories, selected, onChange }) {
  return (
    <form>
      <label htmlFor="category">Categoría</label>
      <select
        id="category"
        value={selected || ""}
        onChange={e => onChange(e.target.value || undefined)}
      >
        <option value="">Todas</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </form>
  );
}