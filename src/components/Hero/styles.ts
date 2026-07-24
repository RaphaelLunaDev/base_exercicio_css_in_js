import styled from 'styled-components'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--cor-principal);
    opacity: 0.7;
  }

  .container {
    position: relative;
    z-index: 1;
  }
`

export const HeroTitle = styled.h2`
  color: #fff;
  font-size: 48px;
  font-family: Gloock, serif;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
