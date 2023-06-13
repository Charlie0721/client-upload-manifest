import { defineStore } from 'pinia';
import { FilesByManifestIdService } from '../services/filesByProductsId.service';

export const useFileStore = defineStore({
  id: 'fileStore',
  state: () => ({
    files: [] as any[],
    fileData: [] as any[],
  }),
  actions: {
    async fetchFiles(productId: string) {
      const response = await FilesByManifestIdService.filesByManifestIdService(productId);
      this.files = response.data;
    },

  },
});

