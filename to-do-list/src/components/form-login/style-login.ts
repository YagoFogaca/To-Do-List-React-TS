import styled from 'styled-components';

export const SectionForm = styled.section`
  width: 40%;
  max-width: 650px;
  min-height: 350px;
  min-width: 250px;
  padding: 1.5rem;
  background-color: #323232;
  border: 1px solid #f66b0e;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 2rem;
  }
  .section-btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
