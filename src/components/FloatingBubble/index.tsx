import { Bubble } from "./styles";

interface FloatingBubbleProps {
  size?: number;
  top?: React.CSSProperties["top"];
  left?: React.CSSProperties["left"];
}

export default function FloatingBubble({
  size = 159,
  top,
  left,
}: FloatingBubbleProps) {
  return (
    <Bubble
      style={{ width: size, height: size, top, left }}
      width={size}
      height={size}
    />
  );
}
