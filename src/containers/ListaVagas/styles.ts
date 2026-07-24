import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
