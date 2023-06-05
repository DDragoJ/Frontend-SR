<script>
</script>
<template>
  <div >
    <form>
        <input
          v-model.trim="email" 
          type="email"
          required
          placeholder="Correo Electrónico">
        <input 
          v-model.trim="password"
          type="password"
          required
          placeholder="Contraseña">
      <button class="button">Iniciar Sesión</button>
    </form>
  </div>
</template>