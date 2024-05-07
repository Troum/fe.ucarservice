import type {Ownership} from "~/interfaces/pages/signup/Ownership";
import type {GroupInterface} from "~/interfaces/models/GroupInterface";

export interface CompanyInterface {
    id: number;
    name: string;
    ownership?: Ownership;
    groups?: GroupInterface[];
}