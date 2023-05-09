import axios from "./axios"

export class LoginUserData {

    public email: string;
    public password: string;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

export class LoginUser {

    static loginUser = async (data: LoginUserData) => {

        return await axios.post('/signin', data)
    }


}