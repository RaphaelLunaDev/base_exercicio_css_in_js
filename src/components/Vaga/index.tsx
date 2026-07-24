import * as S from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => (
  <S.Card>
    <S.Titulo>{titulo}</S.Titulo>

    <ul>
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: R$ {salarioMin} - R$ {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>

    <S.Link href="#">Ver detalhes e candidatar-se</S.Link>
  </S.Card>
)

export default Vaga
