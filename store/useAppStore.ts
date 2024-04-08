import {defineStore} from 'pinia'

export const useAppStore = defineStore('useAppStore', {
    // @ts-ignore
    persist: process.client ? {
        enabled: true,
        strategies: [
            {
                key: 'appStore',
                storage: localStorage
            }
        ]
    } : undefined,
    state: () => ({
        app: {
            lang: "ru"
        },
        modal: {
            show: false
        } as {[key: string]: any }
    }),
    actions: {
        setLang(value: string): void {
            this.app.lang = value
        },
        setDialog(data: any): void {
            this.modal = data
        }
    },
    getters: {
        getLang: (state: any) => {
            return state.app.lang
        },
        getDialog: (state: any) => {
            return state.modal
        }
    }
})