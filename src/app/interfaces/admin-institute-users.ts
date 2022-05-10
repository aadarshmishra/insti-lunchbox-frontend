import {User} from "./User";

export interface AdminInstituteUsers {
  "id" : number,
  "name": string,
  "contact" : string,
  "address" : string,
  "email" : string,
  "status" : number,
  "user" : User
}
