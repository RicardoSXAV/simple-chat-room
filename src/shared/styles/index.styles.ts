import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  width: 100vw;
  height: 100vh;
`;

export const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 60vw;
  min-height: 460px;
  padding: 50px 0;
  margin: 10vh 0;

  background-color: ${({ theme }) => theme.colors.backgroundGray};
  border: 4px solid #ffffff;
  border-radius: 58px;
`;

export const MessagesArea = styled.div`
  padding: 0 50px;
  max-height: max-content;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #555555;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background: #aaaaaa;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888888;
  }
`;
