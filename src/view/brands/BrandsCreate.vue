<template>
  <div>
    <RouterLink to="../brands">Voltar</RouterLink>
    <h1>Inserir nova marca</h1>
    <form onclick="event.preventDefault()">
      <label for="name">Nome:</label>
      <input
        v-model="brand.name"
        type="text"
        required
        maxlength="30"
        id="name"
      />
      <label for="country">País</label>
      <input
        v-model="brand.country"
        type="text"
        required
        maxlength="50"
        id="country"
      />
      <button @click="create">Cadastrar</button>
    </form>
  </div>
</template>

<script setup>
// importa a url base da api
import apiUrl from '@/config/api'
import { reactive } from 'vue'
import axios from 'axios'

// objeto reativo para capturar os dados do usuário
const brand = reactive({
  name: '',
  country: '',
})

// função para cadastrar uma nova marca
const create = async () => {
  axios
    .post(apiUrl + '/api/brands', brand)
    .then(response => {
      alert('Dados cadastrados com sucesso!')
    })
    .catch(error => {
      alert('Erro ao cadastrar')
      console.log('Erro: ', error)
    })
}
</script>

<style lang="scss" scoped></style>
