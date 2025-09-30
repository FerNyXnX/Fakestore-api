import { useFetch } from "./useFetch";

export function useCategories() {
  const { data, loading, error } = useFetch("/products/categories", []);
  return { categories: data || [], loading, error };
}