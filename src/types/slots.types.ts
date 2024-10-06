import { TRoomType } from "./rooms.types";

export type TSlotType = {
    _id: string;
    room: string;
    date: string;
    startTime: string;
    endTime: string;
}

export type TSlotManagementType = {
    _id: string;
    room: TRoomType;
    date: string;
    startTime: string;
    endTime: string;
}