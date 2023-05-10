<template>
  <div>
    <ul>
      <li v-for="file in files" :key="file._id">{{ file.purchaseNumber }}</li>
    </ul>
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

    const files = computed(() => fileStore.files);
    console.log(files)
    onMounted(async () => {
      await fileStore.fetchFiles(productIds.join(','))
    })

    return {
      files
    }
  }
})
</script>