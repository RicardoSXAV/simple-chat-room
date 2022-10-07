import { useEffect, useState } from "react";
import { formatMessageTime } from "../../utils/messages";
import { trpc } from "../../utils/trpc";
import { Bubble, Container, MessageImage, Text, TimeText } from "./styles";

interface MessageItemProps {
  text: string;
  imageId?: string;
  createdAt?: string;
  bottomMessageRef?: React.RefObject<HTMLDivElement>;
}

export default function MessageItem({
  text,
  imageId,
  createdAt,
  bottomMessageRef,
}: MessageItemProps) {
  const { data: imageUrl } = trpc.getImageUrl.useQuery({ imageId });

  return (
    <Container ref={bottomMessageRef}>
      <Bubble>
        {imageUrl && <MessageImage src={imageUrl} />}

        <Text>{text}</Text>
      </Bubble>

      {createdAt && <TimeText>{formatMessageTime(createdAt)}</TimeText>}
    </Container>
  );
}
