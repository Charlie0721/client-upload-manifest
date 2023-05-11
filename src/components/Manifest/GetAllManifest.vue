<template>
  <div class="container">
    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="(manifest, index) in manifestStore.allManifest"
        :key="manifest._id + index"
      >
        <div class="card">
          <div class="card-content">
            <h5 class="card-title">{{ manifest.originalFileName }}</h5>
            <img :src="manifest.imageURL" class="card-img-top" alt="...">
             <p class="card-text">Id del PDF: {{ manifest.public_id }}</p>
            <p class="card-text">
              Url PDF: <a :href="manifest.imageURL" target="_blank">{{ manifest.imageURL }}</a>
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useManifestStore } from '../../stores/getAllFiles.store'

const manifestStore = useManifestStore()
let page = ref(1)
let limit = ref(10)
let manifest = reactive<any>([])
onMounted(async () => {
  await getData(page.value, limit.value)
})

const getData = async (page: number, limit: number) => {
  ;(page = page), (limit = limit)
  manifest = await manifestStore.getAllManifest(page, limit)
}
</script>
<style scoped>
.card-content {
  padding: 1rem;
}
</style>