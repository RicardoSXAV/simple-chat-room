import { useEffect, useState } from "react";
import axios from "axios";

import { trpc } from "../../utils/trpc";
import {
  Button,
  Container,
  ErrorText,
  ImageInput,
  ImagePreview,
  Input,
  Wrapper,
} from "./style";
import Camera from "../../assets/images/camera.svg";
import SendButton from "../../assets/images/send-button.svg";
import { PresignedPost } from "aws-sdk/clients/s3";

interface MessageInputProps {
  refetchMessages?: () => void;
}

export default function MessageInput({ refetchMessages }: MessageInputProps) {
  const [messageText, setMessageText] = useState("");
  const [messageImage, setMessageImage] = useState<File>();
  const [messageImageError, setMessageImageError] = useState(false);

  const { mutate: sendMessage } = trpc.sendMessage.useMutation({
    onSuccess: () => {
      refetchMessages?.();
      setMessageText("");
    },
  });
  const { mutate: getImagePostUrl } = trpc.getImagePostUrl.useMutation({
    onSuccess: async (data) => {
      await uploadImage(data).then((key) => {
        if (key) {
          sendMessage({ text: messageText, imageId: key });
          setMessageImage(undefined);
        }
      });
    },
  });

  useEffect(() => {
    if (messageImageError) {
      setTimeout(() => {
        setMessageImageError(false);
      }, 3000);
    }
  }, [messageImageError]);

  interface UploadImageParams {
    data: PresignedPost;
    key: string;
  }

  const uploadImage = async (params: UploadImageParams | undefined) => {
    try {
      if (!messageImage) return;

      const formData = new FormData();

      if (params) {
        const { data, key } = params;

        const form = {
          ...data.fields,
          file: messageImage,
        };

        for (const field in form) {
          formData.append(field, form[field as keyof typeof form]);
        }

        await axios.post(data.url, formData);

        return key;
      }
    } catch (error) {
      setMessageImageError(true);
    }
  };

  const handleMessageSend = async () => {
    if (messageText && messageImage) {
      getImagePostUrl({ fileName: messageImage.name });

      return;
    }

    if (messageText) {
      sendMessage({ text: messageText });
    }
  };

  return (
    <Wrapper>
      {messageImageError && (
        <ErrorText>Could not send the provided image</ErrorText>
      )}
      <Container>
        <Button style={{ marginLeft: 20, marginRight: 40 }}>
          <ImageInput
            onChange={(event) => setMessageImage(event.target.files?.[0])}
          />
          {messageImage ? (
            <ImagePreview src={URL.createObjectURL(messageImage)} />
          ) : (
            <Camera />
          )}
        </Button>

        <Input
          placeholder="Enter message..."
          onChange={(event) => setMessageText(event.target.value)}
          value={messageText}
        />

        <Button onClick={handleMessageSend}>
          <SendButton />
        </Button>
      </Container>
    </Wrapper>
  );
}
