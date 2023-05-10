import axios from "./axios"

export class AllManifestServices {

    static allManifest = async (page: number, limit: number) => {

        return axios.get(`/get-files?page=${page}&limit=${limit}`)
    }

}