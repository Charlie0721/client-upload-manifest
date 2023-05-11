import axios from "./axios"

export class FilesByProductsIdService {

    static filesByProductsIdService = async (productId: string) => {

        return await axios.get(`/get-files-by-productsid/${productId}`)
    }


}