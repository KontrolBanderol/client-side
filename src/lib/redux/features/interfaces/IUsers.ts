export interface Meta {
  id: string;
  name: string;
  description: string | null;
}

export interface Email {
  id: string;
  email: string;
  verified: boolean;
}

export default interface UserData {
  id: string;
  fullname: string;
  meta: Meta;
  email: Email;
  icon: string;
  verified: boolean;
}
