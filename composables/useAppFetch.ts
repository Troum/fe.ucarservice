import {useFetch, type UseFetchOptions} from "#app";
import {useAppStore} from "~/store/useAppStore";

export function useAppFetch<T> (url: string | (() => string), options: UseFetchOptions<T> = {}) {
    // @ts-ignore
    options.baseURL = useRuntimeConfig().public.baseURL
    options.headers = {
        'Accept-Language': useAppStore().getLang,
    }
    return useFetch(url, {
        ...options
    })
}