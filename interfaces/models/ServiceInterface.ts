import type {GroupInterface} from "~/interfaces/models/GroupInterface";

export interface ServiceInterface {
    id: number;
    group_id: number;
    name: string;
    description: string;
    group?: GroupInterface;
}