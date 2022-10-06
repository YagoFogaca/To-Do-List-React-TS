import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 2rem;

  figure {
    display: flex;
    justify-content: center;
  }

  img {
    border-radius: 100%;
    width: 100px;
  }

  .section-btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
