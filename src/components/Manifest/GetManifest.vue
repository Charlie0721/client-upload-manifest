<template>
    <div class="container">
  <div class="row">
    <div class="col-md-4 mb-4" v-for="(file, index) in files" :key="file._id + index">
      <div class="card">
        <div class="card-content">
          <h5 class="card-title">{{ file.originalFileName }}</h5>
          <img :src="file.imageURL" class="card-img-top" alt="...">
          <p class="card-text">Id del PDF: {{ file.public_id }}</p>
          <p class="card-text">
            Url PDF: <a :href="file.imageURL" target="_blank">{{ file.imageURL }}</a>
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
  
  <script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useFileStore } from '../../stores/getFilesByProductsId.store'

export default defineComponent({
  setup() {
    const fileStore = useFileStore()
    const route = useRoute()
    const productIds = (route.params.productId as string).split(',')

    //@ts-ignore

    const files = computed(() => fileStore.files)
    onMounted(async () => {
      await fileStore.fetchFiles(productIds.join(','))
    })

    return {
      files
    }
  }
})
</script>
<style scoped>
.card-content {
  padding: 1rem;
}
</style>