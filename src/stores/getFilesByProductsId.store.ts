import { defineStore } from 'pinia';
import { FilesByProductsIdService } from '../services/filesByProductsId.service';

export const useFileStore = defineStore({
    id: 'fileStore',
    state: () => ({
      files: [] as any[], 
    }),
    actions: {
      async fetchFiles(productId: string) {
        const response = await FilesByProductsIdService.filesByProductsIdService(productId);
        this.files = response.data;
      },
    },
  });

