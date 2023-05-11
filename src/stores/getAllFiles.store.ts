import { defineStore } from 'pinia';
import { AllManifestServices } from '../services/allFiles.service';

export const useManifestStore = defineStore('manifestStore', {

    state: () => {
        return {
            allManifest: [] as any,
            page: 1 as number,
            limit: 10 as number
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

        }
    }

})