import { defineStore } from 'pinia';
import { RegisterUser } from '../services/signup.service';
import { SignupService } from '../services/signup.service';
export const singupStore = defineStore('singupStore', {


    state: () => {
        return {
            registerUser: {} as RegisterUser,

        }
    },
    actions: {
        async signupUser(user: RegisterUser): Promise<any> {
            try {
                const response = await SignupService.registerUser(user)
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