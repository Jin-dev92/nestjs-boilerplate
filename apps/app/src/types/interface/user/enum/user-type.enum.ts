export const UserTypeEnum = {
  NORMAL: 1, //일반
  ADMIN: 2,
} as const;

export type UserTypeEnumType = (typeof UserTypeEnum)[keyof typeof UserTypeEnum];
