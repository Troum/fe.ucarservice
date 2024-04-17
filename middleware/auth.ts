import {useApiService} from "~/services/useApiService";

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server) return;

    const { me } = useApiService();

    const {data, error} = await me();

    if (error) {
        return navigateTo({path: '/sign-in'})
    }

    return navigateTo(to.path)
})