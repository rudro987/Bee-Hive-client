import { TRoomInfo, TRoomType } from "../types";

export const getRoomsInfo = (data: TRoomType[]) =>{
  const roomsArr: TRoomInfo[] = [];
 
  data?.map(rooms => {
    const roomsObj = {
      name: '',
      id: ''
    }
    roomsObj.name = rooms.name;
    roomsObj.id = rooms._id!;
    roomsArr.push(roomsObj);
  })


  return roomsArr;
}