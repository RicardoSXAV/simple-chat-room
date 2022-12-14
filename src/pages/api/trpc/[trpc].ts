/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import mongoose from "mongoose";
import AWS from "aws-sdk";
import { randomUUID } from "node:crypto";

import { Message } from "../../../models/Message";
import { getSignedPostUrl, getSignedUrl } from "../../../utils/aws";

const trpc = initTRPC.create();

const appRouter = trpc.router({
  getMessages: trpc.procedure.query(async () => {
    const messages = Message.find().sort({ createdAt: "asc" });

    return messages;
  }),
  sendMessage: trpc.procedure
    .input(
      z.object({
        text: z.string(),
        imageId: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      await Message.create(input);
    }),
  getImageUrl: trpc.procedure
    .input(
      z.object({
        imageId: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      if (!input.imageId) return "";

      const url = await getSignedUrl(input.imageId);

      return url;
    }),
  getImagePostUrl: trpc.procedure
    .input(
      z.object({
        fileName: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const key = `${randomUUID()}-${input.fileName}`;

        const signed = await getSignedPostUrl(key);

        return { data: signed, key };
      } catch (error) {
        console.log(error);
      }
    }),
});

if (!mongoose.connection.readyState) {
  mongoose
    .connect(String(process.env.MONGO_DB_URL))
    .then(() => console.log("Connected to database!"))
    .then((error) => console.log(error));
}

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
