import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #323232;
  padding: 1rem 1.5rem;

  img {
    width: 65px;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  #img-avatar {
    width: 50px;
    border-radius: 100%;
  }
`;
