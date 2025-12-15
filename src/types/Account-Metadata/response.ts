import { Owners } from "../type";

export interface TagOnAccount {
    id: string;
    value: string;
    date: string;
    user: Owners
}

export interface ResTagOnAccount {
    tags: TagOnAccount[]
}