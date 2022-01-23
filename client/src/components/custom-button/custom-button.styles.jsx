import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #000;
  color: #fff;
  border: none;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const invertedButtonStyles = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
