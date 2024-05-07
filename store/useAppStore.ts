import {defineStore} from 'pinia'
import type {UserInterface} from "~/interfaces/models/UserInterface";

export const useAppStore = defineStore('useAppStore', {
    state: () => ({
        app: {
            language: "ru",
            user: {} as UserInterface,
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
        getUser: (state: any): UserInterface => {
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