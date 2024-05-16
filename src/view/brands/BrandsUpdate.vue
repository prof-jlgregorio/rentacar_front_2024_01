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
      <button @click="update">Cadastrar</button>
    </form>
  </div>
</template>

<script setup>
// importa a url base da api
import apiUrl from '@/config/api'
import { onMounted, reactive } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

//cria a instância do roteador
const router = useRouter()

//..parâmetro da rota
const route = useRoute()

// objeto reativo para capturar os dados do usuário
const brand = reactive({
  id: '',
  name: '',
  country: '',
})

// função para cadastrar uma nova marca
const update = async () => {
  axios
    .put(apiUrl + '/api/brands', brand)
    .then(response => {
      alert('Dados atualizados com sucesso!')
      router.push('/brands')
    })
    .catch(error => {
      alert('Erro ao cadastrar')
      console.log('Erro: ', error)
    })
}
//função para recuperar o objeto mediante o id
const getBrandById = async id => {
  await axios
    .get(apiUrl + '/api/brands/' + id)
    .then(response => {
      console.log('Resposta:', response)
      Object.assign(brand, response.data)
    })
    .catch(error => {
      console.error('Erro:' + error)
    })
}

//executad a recuperação qdo o componente for carregado
onMounted(() => {
  getBrandById(route.params.id)
})
</script>

<style lang="scss" scoped></style>
