import {useI18n} from "vue-i18n";

export function useTranslation(key: string) {
    const {tm} = useI18n()
    return computed((): string => {
        // @ts-ignore
        return tm(key)
    }).value
}