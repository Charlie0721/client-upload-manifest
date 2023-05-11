import { defineStore } from 'pinia';
import { AllManifestServices } from '../services/allFiles.service';
import { DeleteFileService } from '../services/deleteFile.service';

export const useManifestStore = defineStore('manifestStore', {

    state: () => {
        return {
            allManifest: [] as any,
            page: 1 as number,
            limit: 10 as number,
            _id: '' as string,
            responseDelete: '' as string
        }
    },
    actions: {
        async getAllManifest(page: number, limit: number) {
            try {
                page = this.page
                limit = this.limit
                const responseManifest = await AllManifestServices.allManifest(page, limit);
                this.allManifest = responseManifest.data.files
                return this.allManifest

            } catch (error) {
                console.log(error)
            }

        },
        async deleteManifest(id: string) {
            try {

                this._id = id
                const response = await DeleteFileService.deleteFile(this._id);
                this.responseDelete = response.data.message
                return this.responseDelete
            } catch (error) {
                console.log(error)
            }
        }
    }

})