<template>
  <div class="container-fluid mx-auto">
    <Nav />
    <div class="card">
      <div class="card-body">

        <h1 class="h2">MANIFIESTOS</h1>
        <button class="btn btn-dark" @click="previous(page, limit)" v-if="page > 0">Anterior</button>
        pagina: {{ manifestStore.page }}
        <button class="btn btn-dark" @click="next(page, limit)">Siguiente</button>
      </div>
    </div>
    <br /><br />

    <div class="row w-100">
      <div class="col-md-4 mb-4" v-for="(manifest, index) in manifestStore.allManifest" :key="manifest._id + index">
        <div class="card card text-white bg-dark">
          <div class="card-header text-center">
            <h5 class="card-title"> Manifiesto: </h5>
            <p class="card-text ">{{ manifest.manifestName }}</p>
          </div>
          <div class="card-content">
            <p class="card-text ">
             <a class="text-white" :href="manifest.imageURL" target="_blank">{{ manifest.imageURL }}</a>
            </p>

            <button class="btn btn-danger" @click="deleteFIle(manifest._id)">
              Eliminar Manifiesto
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useManifestStore } from '../../stores/getAllFiles.store'
import Nav from '../nav/Nav.vue'

const manifestStore = useManifestStore()
let page = ref(1)
let limit = ref(10)
let manifest = reactive<any>([])
let _id = ref('')


onMounted(async () => {
  await getData(page.value, limit.value)
})

const getData = async (page: number, limit: number) => {
  ; (page = page), (limit = limit)
  manifest = await manifestStore.getAllManifest(page, limit)
}

const previous = async (pages: number, limits: number) => {
  pages = page.value--
  manifestStore.page = pages
  manifestStore.page = pages
  await getData(pages, limits)
}

const next = async (pages: number, limits: number) => {
  pages = page.value++
  manifestStore.page = pages
  await getData(pages, limits)
}

const deleteFIle = async (id: string) => {
  _id.value = id

  const responseDelete = await manifestStore.deleteManifest(_id.value)

  if (responseDelete === 'Manifiesto eliminado satisfactoriamente') {
    location.reload()
    alert(responseDelete)
  }
}

</script>
<style scoped>
.card-content {
  padding: 1rem;
}

.custom-col {
  flex: 0 0 calc(33.33% - 1rem);
  max-width: calc(33.33% - 1rem);
}
</style>