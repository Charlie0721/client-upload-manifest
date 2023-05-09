import { defineStore } from 'pinia';
import { GetFilesByPRoductsId } from '../services/getManifestByProductsId';


export const getFilesQueryStore = defineStore('getFilesQueryStore', {

    state: () => {
        return {
            files: [] as any,
            productsId: [] as any,
        }
    },
    actions: {

        async getFilesByProductId(productsId:[]) {

            try {
                productsId=this.productsId;
                const responseFiles = await GetFilesByPRoductsId.getFilesByPRoductsId(productsId)
                console.log(responseFiles)
                this.files=responseFiles.data
                return   this.files

            } catch (error) {
                console.log(error);
            }


        }


    }


})
