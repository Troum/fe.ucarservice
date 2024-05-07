import type {RoleInterface} from "~/interfaces/models/RoleInterface";
import type {CompanyInterface} from "~/interfaces/models/CompanyInterface";

export interface UserInterface {
    id: number;
    first_name: string;
    last_name: string;
    surname: string;
    email: string;
    company?: CompanyInterface;
    roles: RoleInterface[];
}