import { useFetch } from "./useFetch";

export function useProducts(category) {
  const path = category ? `/products/category/${category}` : "/products";
  const { data, loading, error } = useFetch(path, [category]);
  return { products: data || [], loading, error };
}