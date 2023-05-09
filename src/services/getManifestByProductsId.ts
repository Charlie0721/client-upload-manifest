import axios from "./axios"

export class GetFilesByPRoductsId {


    static getFilesByPRoductsId = async (productId: []) => {

        return await axios.get(`/get-files-by-productsid?productId=${productId}`)

    }


}

