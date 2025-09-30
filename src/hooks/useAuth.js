import { useState } from "react";
import { api } from "../app/axios";

export function useAuth() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login(username, password) {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.post("/auth/login", { username, password });
      setToken(data.token);
      localStorage.setItem("token", data.token);
      return true;
    } catch {
      setError("Credenciales inválidas");
      return false;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setToken(null);
    localStorage.removeItem("token");
  }

  return { token, login, logout, loading, error };
}