
import { FormularioStyled } from './styled'

function Formulario() {
    return (

        <FormularioStyled>
            <h1>Cadastro cliente</h1>

            <label>Nome</label>
            <input type="text"></input>

            <label>Rg</label>
            <input type="text"></input>

            <label>Cpf</label>
            <input type="text"></input>

            <label>Data Nacimento</label>
            <input type="date"></input>

            <label>Cp</label>
            <input type="text"></input>

            <label>Endereco</label>
            <input type="text"></input>

            <label>Cidade</label>
            <input type="text"></input>

            <label>Estado</label>
            <input type="text"></input>
            <button>Salvar</button>

        </FormularioStyled>
    )
}
export default Formulario