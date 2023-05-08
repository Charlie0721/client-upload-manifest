import { defineStore } from 'pinia';
import {RegisterUser  } from '../services/signup.service';
import { SignupService } from '../services/signup.service';
export const singupStore = defineStore('singupStore', {


    state: () => {
        return {
            registerUser: {} as RegisterUser,

        }
    },
    actions: {

        async signupUser(user: RegisterUser) {

            try {
               
                const response = await SignupService.registerUser(user)
                console.log(response);

            } catch (error) {
                console.log(error)
            }

        }


    }



});