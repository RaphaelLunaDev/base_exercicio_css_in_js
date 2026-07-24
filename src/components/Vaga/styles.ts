import styled from 'styled-components'

export const Card = styled.li`
  list-style: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
`

export const Titulo = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`

export const Info = styled.p`
  margin: 4px 0;
  color: #666;
`

export const Link = styled.a`
  display: inline-block;
  margin-top: 16px;
  text-decoration: none;
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`
