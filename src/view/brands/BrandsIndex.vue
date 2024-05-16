<template>
  <div>
    <RouterLink to="/brands/create">Adicionar Nova Marca</RouterLink>
    <h1>Listar Marcas</h1>
    <div>
      <table>
        <tr>
          <th>Nome</th>
          <th>País</th>
          <th>Editar</th>
        </tr>
        <!-- laço de repetição para exibir os dados -->
        <tr v-for="brand in brands" :key="brand.id">
          <td>{{ brand.name }}</td>
          <td>{{ brand.country }}</td>
          <td>
            <RouterLink
              :to="{ name: 'BrandsUpdate', params: { id: brand.id } }"
            >
              Editar
            </RouterLink>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import apiUrl from '@/config/api'
import axios from 'axios'

//array para armazenar os dados vindos da api
const brands = ref([])

//funcao para carregar os dados cadastrados
const getAllBrands = async () => {
  axios
    .get(apiUrl + '/api/brands')
    .then(response => {
      console.log('Resposta:', response)
      brands.value = response.data._embedded.brandDtoList
    })
    .catch(error => {
      console.error('Error:', error)
    })
}
// lifecycle hook - evento: ao carregar o componente
onMounted(() => {
  getAllBrands()
})
</script>

<style lang="scss" scoped></style>
