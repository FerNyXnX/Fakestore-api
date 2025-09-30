import { useState, useEffect } from "react";
import { api } from "../app/axios";

export function useCart(userId = 1) {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/carts/user/${userId}`)
      .then(res => setCart(res.data[0] || null))
      .finally(() => setLoading(false));
  }, [userId]);

  async function addToCart(productId, quantity = 1) {
    await api.post("/carts", {
      userId,
      date: new Date().toISOString().slice(0, 10),
      products: [{ productId, quantity }]
    });
  }

  return { cart, loading, addToCart };
}