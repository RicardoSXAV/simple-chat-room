import { useEffect, useState } from "react";
import { formatMessageTime } from "../../utils/messages";
import { trpc } from "../../utils/trpc";
import { Bubble, Container, MessageImage, Text, TimeText } from "./styles";

interface MessageItemProps {
  text: string;
  imageId?: string;
  createdAt?: string;
}

export default function MessageItem({
  text,
  imageId,
  createdAt,
}: MessageItemProps) {
  const { mutate: getImageUrl, data: imageUrl } =
    trpc.getImageUrl.useMutation();

  useEffect(() => {
    if (imageId) {
      getImageUrl({ imageId });
    }
  }, []);

  return (
    <Container>
      <Bubble>
        {imageUrl && <MessageImage src={imageUrl} />}

        <Text>{text}</Text>
      </Bubble>

      {createdAt && <TimeText>{formatMessageTime(createdAt)}</TimeText>}
    </Container>
  );
}
