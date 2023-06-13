import { defineStore } from 'pinia';
import { FilesByManifestIdService } from '../services/filesByProductsId.service';
import { DownloadServiceFile } from '../services/downloadFile.service';

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
      async downloadManifest(public_id:string){
        const response = await DownloadServiceFile.downloadFile(public_id)
      
       this.fileData=response.data;
        return this.fileData;
      }

    },
  });

