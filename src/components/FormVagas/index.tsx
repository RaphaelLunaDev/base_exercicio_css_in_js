import * as S from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => (
  <S.Form>
    <S.Campo
      type="text"
      placeholder="Buscar vaga"
      onChange={(e) => aoPesquisar(e.target.value.toLowerCase())}
    />

    <S.Botao type="button">Pesquisar</S.Botao>
  </S.Form>
)

export default FormVagas
