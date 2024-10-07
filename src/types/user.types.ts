export type TLoginInputs = {
    email: string;
    password: string;
  };

export type TUserTypes = {
    _id: string;
    name: string;
    email: string;
    role: string;
    phone: string;
    address: string;
}

export type TUser = {
  userEmail: string;
  role: string;
  iat: number;
  exp: number
}