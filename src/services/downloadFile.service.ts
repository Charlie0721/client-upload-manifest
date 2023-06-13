import axios from './axios';

export class DownloadServiceFile {


    static downloadFile = async (public_id: string) => {

        return axios.get(`/download-manifest/${public_id}`)

    }

}