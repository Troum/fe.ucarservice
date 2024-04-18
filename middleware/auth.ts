import {useApiService} from "~/services/useApiService";
import {useAppStore} from "~/store/useAppStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { me } = useApiService();

    const {data: user, error} = await me()

    if (error.value) {
        return navigateTo({path: '/sign-in'})
    }

    useAppStore().setUser(user.value)
    

})