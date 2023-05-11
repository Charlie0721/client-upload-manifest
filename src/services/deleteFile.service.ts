import axios from './axios';
export class DeleteFileService {

    static deleteFile = async (_id: string) => {
        return axios.delete(`/delete-file/${_id}`)
    }
}