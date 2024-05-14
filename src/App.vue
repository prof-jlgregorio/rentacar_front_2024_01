<template>
  <div>
    <nav>
      <ul>
        <li><RouterLink to="/brands">Marcas</RouterLink></li>
        <li><RouterLink to="/cars">Carros</RouterLink></li>
      </ul>
    </nav>

    <RouterView />
  </div>
</template>

<script setup></script>

<style scoped></style>
