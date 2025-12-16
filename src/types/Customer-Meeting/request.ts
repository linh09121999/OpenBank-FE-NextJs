import { Creator, Invitee } from "../type";

export interface ReqMeeting_VideoConference_Call {
    provider_id: string;
    purpose_id: string;
    date: string; // ISO 8601 date string
    creator: Creator;
    invitees: Invitee[];
}