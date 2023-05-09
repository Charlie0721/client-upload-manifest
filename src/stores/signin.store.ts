import { defineStore } from 'pinia';
import { LoginUser,LoginUserData } from '../services/signin.service';
export const signinStore = defineStore('signinStore', {


    state: () => {
        return {
            signin: {} as LoginUserData,
        }
    },
    actions: {
        async signinUser(user: LoginUserData): Promise<any> {
            try {
                const response = await LoginUser.loginUser(user);
                return response
            } catch (error: any) {

                if (error.response && error.response.status === 400) {

                    throw new Error(error.response.data.message)
                } else {
                    console.log(error)
                }
            }
        }

    }



});