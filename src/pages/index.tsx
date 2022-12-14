import { trpc } from "../utils/trpc";
import {
  ChatArea,
  MessagesArea,
  PageContainer,
} from "../shared/styles/index.styles";
import Navbar from "../components/Navbar";
import MessageInput from "../components/MessageInput";
import MessageItem from "../components/MessageItem";
import FloatingBubble from "../components/FloatingBubble";
import { useEffect, useRef } from "react";

export default function Home() {
  const bottomMessageRef = useRef<HTMLDivElement>(null);

  const { data: messages, refetch: refetchMessages } =
    trpc.getMessages.useQuery();

  const scrollChatToBottom = () => {
    bottomMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollChatToBottom();
  }, [messages]);

  return (
    <PageContainer>
      <Navbar />

      <FloatingBubble top="30%" left="5%" />
      <FloatingBubble top="60%" left="-10%" size={230} />
      <FloatingBubble top="30%" left="90%" size={60} />
      <FloatingBubble top="45%" left="85%" size={130} />
      <FloatingBubble top="65%" left="92%" size={200} />
      <FloatingBubble top="70%" left="10%" size={100} />

      <ChatArea>
        <MessagesArea>
          {messages?.map(({ text, imageId, createdAt, _id }, index) => (
            <MessageItem
              key={String(_id)}
              text={text}
              imageId={imageId}
              createdAt={createdAt}
              bottomMessageRef={
                index + 1 === messages.length ? bottomMessageRef : undefined
              }
            />
          ))}
        </MessagesArea>

        <MessageInput refetchMessages={refetchMessages} />
      </ChatArea>
    </PageContainer>
  );
}
