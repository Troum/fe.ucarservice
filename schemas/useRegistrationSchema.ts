import {string} from "yup";
import {useI18n} from "vue-i18n";

const {tm} = useI18n()

export const useRegistrationSchema = {
    firstName: string()
        .required(tm('forms.registration.fields.firstName.rules.required')),
    lastName: string()
        .required(tm('forms.registration.fields.lastName.rules.required')),
    surname: string(),
    company: string()
        .required(tm('forms.registration.fields.company.rules.required')),
    email: string()
        .required(tm('forms.registration.fields.email.rules.required'))
        .email(tm('forms.registration.fields.email.rules.invalid')),
    password: string()
        .min(8, tm('forms.registration.fields.password.rules.min'))
        .required(tm('forms.registration.fields.password.rules.required'))
}