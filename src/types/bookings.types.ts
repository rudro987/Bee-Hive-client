import { TRoomType } from "./rooms.types";
import { TSlotType } from "./slots.types";
import { TUserTypes } from "./user.types";

export type TBookingsType = {
    _id: string;
    room: TRoomType;
    slots: TSlotType[];
    user: TUserTypes;
    date: string;
    isConfirmed: "confirmed" | "unconfirmed" 
    isDeleted?: boolean;
    totalAmount?: number;
}