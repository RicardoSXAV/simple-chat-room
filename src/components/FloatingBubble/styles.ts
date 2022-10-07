import styled from "styled-components";
import BubbleSvg from "../../assets/images/bubble.svg";

export const Bubble = styled(BubbleSvg)`
  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }

  position: absolute;
  animation: float 6s ease-in-out infinite;
  border-radius: 50%;
`;
