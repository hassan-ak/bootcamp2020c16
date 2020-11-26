import styled from 'styled-components';

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    user-select: none;
    font-size: 0.8rem;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #59BC86, #25b33d, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #975353, #fc2828, #975353)'
        : 'linear-gradient(90deg, #a8a9f8, #546ec4, #a8a9f8);'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;