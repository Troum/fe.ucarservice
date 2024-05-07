import {useFetch, type UseFetchOptions} from "#app";
import {useAppStore} from "~/store/useAppStore";
import {useAlertStore} from "~/store/useAlertStore";

export function useAppFetch<T> (url: string, options: UseFetchOptions<T> = {}) {
    // @ts-ignore
    options.baseURL = useRuntimeConfig().public.baseURL
    options.headers = {
        'Content-Type': 'application/json',
        'Accept-Language': useAppStore().getLanguage,
        Accept: 'application/json'
    }

    options.onResponse = ({response}) => {
        if (response._data.hasOwnProperty('message')) {
            useAlertStore().setAlert({show: true, message: response._data['message'], icon: 'i-heroicons-hand-thumb-up', color: 'primary'})
        }
        if (response._data.hasOwnProperty('token')) {
            useAppStore().setToken(response._data['token']);
            useAppStore().setUser(response._data['user']);
        }
    }

    options.onResponseError = ({response}) => {
        switch (response.status) {
            case 400:
            case 401:
            case 403:
                useAlertStore().setAlert({show: true, message: response._data['message'], icon: 'i-heroicons-shield-exclamation', color: 'red'})
                break
            case 404:
                useAlertStore().setAlert({show: true, message: response._data['message'], icon: 'i-heroicons-no-symbol', color: 'red'})
                break
            case 500:
                useAlertStore().setAlert({show: true, message: response._data['message'], icon: 'i-heroicons-exclamation-triangle', color: 'red'})
                break
        }
    }

    if (url.includes('auth')) {
        options.headers.Authorization = `Bearer ${useAppStore().getToken}`
    }

    return useFetch(url, {
        ...options
    })
}