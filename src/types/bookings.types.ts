import { TRoomType } from "./rooms.types";
import { TSlotType } from "./slots.types";
import { IUserTypes } from "./user.types";

export type TBookingsType = {
  _id: string;
  room: TRoomType;
  slots: TSlotType[];
  user: IUserTypes;
  date: string;
  isConfirmed: "confirmed" | "unconfirmed";
  isDeleted?: boolean;
  totalAmount?: number;
};

export type TUserBookingType = {
  _id: string;
  room: TRoomType;
  slots: TSlotType[];
  date: string;
  isConfirmed: "confirmed" | "unconfirmed";
  isDeleted: boolean;
  totalAmount?: number;
};
