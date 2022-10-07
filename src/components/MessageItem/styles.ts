import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 15px;
`;

export const Bubble = styled.div`
  display: flex;
  flex-direction: column;

  width: max-content;
  max-width: 80%;
  padding: 20px;
  margin-bottom: 5px;

  background: linear-gradient(180deg, #ffffff 0%, #bcdfff 100%);
  border-radius: 25px;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textBlue};
`;

export const MessageImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;

  margin-bottom: 10px;
  border-radius: 20px;
`;

export const TimeText = styled.p`
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  margin-left: 5px;
`;
