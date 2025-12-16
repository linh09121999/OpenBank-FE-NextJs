import { Creator, Invitee, Keys, Present } from "../type";

export interface ResMeeting {
    meeting_id: string;
    provider_id: string;
    purpose_id: string;
    bank_id: string;
    present: Present;
    keys: Keys;
    when: string; // ISO 8601 date string
    creator: Creator;
    invitees: Invitee[];
}

export interface ResMeetings {
    meetings: ResMeeting[]
}