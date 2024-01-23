import { UserTypeEnumType } from "./enum/user-type.enum";

export class CreateUserDto {
  type: UserTypeEnumType;
  email: string;
  password: string;
  name: string;
  username: string;
  enName: string;
  thumbnail: string;
  jobUids: string;
  agencyUid: string;
  groupUid: string;
  countryUid: string;
  birthday: string;
  debutday: string;
  tagUids: string;
}
