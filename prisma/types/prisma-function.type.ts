import { PrismaClient } from "@prisma/client";

export type PrismaFunction<T extends keyof PrismaClient> =
  keyof PrismaClient[T];
