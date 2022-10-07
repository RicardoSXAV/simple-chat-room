import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 50px;
  padding: 10px;

  background-color: white;
  border-radius: 100px;
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.5);
`;

export const Input = styled.input`
  width: 80%;

  border: none;
  outline: none;

  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textBlue};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ImageInput = styled.input.attrs({
  type: "file",
  title: " ",
  accept: '".png, .jpg, .jpeg"',
})`
  position: absolute;
  width: 100%;
  height: 100%;

  opacity: 0%;

  &:hover {
    cursor: pointer;
  }
`;

export const ImagePreview = styled.img`
  border-radius: 10px;

  width: 55px;
  height: 55px;
  object-fit: cover;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  transition: ease-in-out 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.9);
    transition: ease-in-out 0.05s;
  }
`;

export const ErrorText = styled.p`
  margin: 0 70px;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.errorRed};
`;
