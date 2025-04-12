<script>
    import { auth } from '$lib/firebase'; 
    import { signOut } from 'firebase/auth';
    import { goto } from '$app/navigation';
    
  
    async function handleLogout() {
      await signOut(auth);
      goto('/register');
    }
  </script>
  
  <h1>Bienvenido a la página</h1>
  <button on:click={handleLogout}>Cerrar Sesión</button>