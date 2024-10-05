export type TRoomType = {
    _id?: string,
    name: string,
    roomNo: number,
    image: string,
    gallery?: string[],
    floorNo: number,
    capacity: number,
    pricePerSlot: number,
    amenities?: [string],
    isDeleted?: false
}