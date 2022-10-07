import mongoose from "mongoose";
import { getMongooseModel } from "../utils/mongoose";

export interface MessageDocument {
  text: string;
  imageId?: string;
  createdAt?: string;
  updatedAt?: string;
}

const MessageSchema = new mongoose.Schema(
  {
    text: String,
    imageId: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Message = getMongooseModel<MessageDocument>(
  "Message",
  MessageSchema
);
