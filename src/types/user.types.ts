export type TLoginInputs = {
  email: string;
  password: string;
};

export interface IUserInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IRegisterInputs extends IUserInfo {
  password: string;
}

export interface IUserTypes extends IUserInfo {
  _id: string;
}

export type TUser = {
  userEmail: string;
  role: string;
  iat: number;
  exp: number;
};
