import {defineStore} from 'pinia'
import {string} from "yup";

export const useAppStore = defineStore('useAppStore', {
    state: () => ({
        app: {
            language: "ru",
            user: {} as {[key: string]: any },
            token: null
        },
        modal: {
            show: false
        } as {[key: string]: any }
    }),
    persist: process.client ? true : undefined,
    actions: {
        setLang (value: any): void {
            this.app.language = value
        },
        setToken (token: string|any): void {
            this.app.token = token
        },
        setUser (user: any): void {
            this.app.user = user
        },
        setDialog (data: any): void {
            this.modal = data
        }
    },
    getters: {
        getToken: (state: any): string => {
            return state.app.token
        },
        getUser: (state: any): {[key: string]: any } => {
            return state.app.user
        },
        getDialog: (state: any) => {
            return state.modal
        },
        getLanguage: (state: any) => {
            return state.app.language
        }
    }
})