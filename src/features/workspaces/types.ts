import { Models } from "node-appwrite";

export type workspace = Models.Document & {
  name: string;
  imageUrl: string;
  userId: string;
  inviteCode: string;
};
