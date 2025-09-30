import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { login, loading, error } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const username = form.get("username");
    const password = form.get("password");
    await login(username, password);
  }

  return (
    <section>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario</label>
        <input id="username" name="username" required />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" name="password" required />
        <button type="submit" disabled={loading}>Entrar</button>
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </section>
  );
}