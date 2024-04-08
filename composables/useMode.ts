import {computed} from "vue";

export function useMode() {

    const colorMode = useColorMode()

    return computed(() => {
        return {
            dark: colorMode.value === 'dark',
            light: colorMode.value === 'light'
        }
    })
}