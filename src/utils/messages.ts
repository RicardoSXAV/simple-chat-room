import { formatDistanceToNowStrict } from "date-fns";

export const formatMessageTime = (createdAt: string) => {
  const messageTime = new Date(createdAt);

  return formatDistanceToNowStrict(new Date(createdAt), { addSuffix: true });
};
