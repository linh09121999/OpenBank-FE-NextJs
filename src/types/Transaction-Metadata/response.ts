import { LocationUser, Owners } from "../type";

export interface ResTransactionComment {
    id: string;
    value: string;
    date: string; // ISO 8601 date string
    user: Owners;
}

export interface ResTransactionComments {
    comments: ResTransactionComment[]
}

export interface ResTransactionImage {
    id: string;
    label: string;
    URL: string;
    date: string;
    user: Owners;
}

export interface ResTransactionImages {
    images: ResTransactionImage[]
}

export interface ResTransactionWhereTag {
    where: LocationUser
}