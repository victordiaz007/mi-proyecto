<!-- src/routes/register/+page.svelte -->
<script lang="ts">
  import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { auth } from "$lib/firebase";
  import { goto } from "$app/navigation";

  let email: string = "";
  let password: string = "";
  let confirmPassword: string = ""; // Nuevo campo para confirmar contraseña
  let error: string = "";
  let loading: boolean = false;
  let isLogin: boolean = true;
  let showSuccess: boolean = false;

  // Función para mostrar notificaciones con AlertifyJS, con fallback a alert
  function showNotification(message: string) {
    if (typeof window !== "undefined" && typeof window.alertify !== "undefined") {
      window.alertify.set("notifier", "position", "top-right");
      window.alertify.success(message);
    } else {
      alert(message);
    }
  }

  async function handleAuth() {
    try {
      loading = true;
      error = "";
      showSuccess = false;

      if (isLogin) {
        // Modo inicio de sesión
        await signInWithEmailAndPassword(auth, email, password);
        showNotification("Has iniciado sesión correctamente.");
        setTimeout(() => {
          goto("/inicio");
        }, 2000); // Retraso para mostrar la notificación
      } else {
        // Modo registro: validar que las contraseñas coincidan
        if (password !== confirmPassword) {
          error = "Las contraseñas no coinciden. Por favor, verifica.";
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        const user = userCredential.user;
        await sendEmailVerification(user);
        showNotification("Tu cuenta ha sido creada. Revisa tu correo para verificarla.");
        showSuccess = true;
        email = "";
        password = "";
        confirmPassword = ""; // Limpiar el nuevo campo
        error =
          "Registro exitoso. Se ha enviado un email de verificación a " +
          email +
          ". Por favor, revisa tu bandeja de entrada.";
        setTimeout(() => {
          showSuccess = false;
          isLogin = true;
        }, 5000);
      }
    } catch (err: any) {
      if (err.code === "auth/invalid-credential") {
        error =
          "Email o contraseña incorrectos. Por favor, verifica tus credenciales.";
      } else {
        error = err.message || "Error en la autenticación";
      }
      console.error("Firebase Error:", err);
      showSuccess = false;
    } finally {
      loading = false;
    }
  }

  function toggleAuthMode() {
    isLogin = !isLogin;
    error = "";
    showSuccess = false;
    email = "";
    password = "";
    confirmPassword = ""; // Limpiar al cambiar de modo
  }
</script>

<main>
  <div class="auth-container">
    <div class="avatar">
      <i class="bi bi-person-circle" style="font-size: 80px; color: #ffffff;"></i>
    </div>
    <h2>Bienvenido a <span class="highlight">BiciKingV</span></h2>
    <form on:submit|preventDefault={handleAuth}>
      <div class="form-group">
        <input
          type="email"
          bind:value={email}
          placeholder="Email o nombre de usuario"
          required
          disabled={loading}
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          bind:value={password}
          placeholder="Contraseña"
          required
          disabled={loading}
        />
      </div>
      {#if !isLogin}
        <div class="form-group">
          <input
            type="password"
            bind:value={confirmPassword}
            placeholder="Confirmar contraseña"
            required
            disabled={loading}
          />
        </div>
      {/if}
      {#if error && !showSuccess}
        <p class="error">{error}</p>
      {/if}
      {#if showSuccess}
        <p class="success">{error}</p>
      {/if}
      <button type="submit" disabled={loading}>
        {loading
          ? isLogin
            ? "Iniciando..."
            : "Registrando..."
          : isLogin
            ? "Iniciar Sesión"
            : "Registrarse"}
      </button>
      <button
        class="toggle"
        id="buttonLogin"
        on:click|preventDefault={toggleAuthMode}
      >
        {isLogin
          ? "¿No tienes cuenta? Regístrate"
          : "¿Ya tienes cuenta? Inicia sesión"}
      </button>
    </form>
  </div>
</main>

<style>
  @import "bootstrap-icons/font/bootstrap-icons.css";

  :global(body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(45deg, #1a3c5e, #32d275);
  }

  .auth-container {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 2.5rem !important;
    width: 100% !important;
    max-width: 450px !important;
    min-height: 550px !important; /* Aumentado para el nuevo campo */
    text-align: center;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .avatar {
    margin: 0 auto 1rem;
  }

  .avatar i {
    display: block;
    margin: 0 auto;
  }

  h2 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .highlight {
    color: #e2dede;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }

  input {
    width: 100%;
    padding: 0.85rem;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    color: white;
    font-size: 1.1rem;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  button {
    width: 100%;
    padding: 0.85rem;
    background: transparent;
    border: 2px solid #d6d0d0;
    border-radius: 5px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover:not(:disabled) {
    background: #4a90e2;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .error {
    color: #ff4d4d;
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  .success {
    color: #28a745;
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  .toggle {
    color: white !important;
    margin-top: 1rem;
    cursor: pointer;
    text-decoration: underline;
  }

  .toggle:hover {
    color: #131314 !important;
  }

  #buttonLogin {
    border: 0;
    color: #fff;
    transition: all 125ms ease-in;
    font-size: 1rem;
  }

  #buttonLogin:hover {
    color: #00ff00;
    background-color: transparent;
  }
</style>