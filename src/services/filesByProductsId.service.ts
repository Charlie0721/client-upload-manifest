import axios from "./axios"

export class FilesByManifestIdService {

    static filesByManifestIdService = async (manifestPosId: string) => {

        return await axios.get(`/get-files-by-manifestposid/${manifestPosId}`)
    }

}