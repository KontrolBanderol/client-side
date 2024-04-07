import UserData from "./IUsers";

export interface loginReq {
  login: string;
  password: string;
}
export interface loginRes {
  ok: boolean;
  result: {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
    userModel: UserData;
  };
}
