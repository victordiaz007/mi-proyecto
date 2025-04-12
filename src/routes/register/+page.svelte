<!-- src/routes/register/+page.svelte -->
<script lang="ts">
  import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '$lib/firebase';
  import { goto } from '$app/navigation';

  let email: string = '';
  let password: string = '';
  let error: string = '';
  let loading: boolean = false;
  let isLogin: boolean = true;
  let showSuccess: boolean = false;

  async function handleAuth() {
    try {
      loading = true;
      error = '';
      showSuccess = false;

      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        goto('/inicio'); // Cambiado de /home a /inicio
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await sendEmailVerification(user);
        showSuccess = true;
        email = '';
        password = '';
        error = 'Registro exitoso. Se ha enviado un email de verificación a ' + email + '. Por favor, revisa tu bandeja de entrada.';
        setTimeout(() => {
          showSuccess = false;
          isLogin = true;
        }, 5000);
      }
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential') {
        error = 'Email o contraseña incorrectos. Por favor, verifica tus credenciales.';
      } else {
        error = err.message || 'Error en la autenticación';
      }
      console.error('Firebase Error:', err);
      showSuccess = false;
    } finally {
      loading = false;
    }
  }

  function toggleAuthMode() {
    isLogin = !isLogin;
    error = '';
    showSuccess = false;
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
      {#if error && !showSuccess}
        <p class="error">{error}</p>
      {/if}
      {#if showSuccess}
        <p class="success">{error}</p>
      {/if}
      <button type="submit" disabled={loading}>
        {loading ? (isLogin ? 'Iniciando...' : 'Registrando...') : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
      </button>
      <p class="toggle" on:click|preventDefault={toggleAuthMode}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </p>
    </form>
  </div>
</main>

<style>
  @import 'bootstrap-icons/font/bootstrap-icons.css';

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
    padding: 2rem;
    width: 100%;
    max-width: 350px;
    text-align: center;
    backdrop-filter: blur(10px);
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
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .highlight {
    color: #e2dede;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    color: white;
    font-size: 1rem;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background: transparent;
    border: 2px solid #d6d0d0;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
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
</style>