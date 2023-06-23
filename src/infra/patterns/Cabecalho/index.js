import { styled } from "styled-components";
import Opcao from "../../components/Opcao/opcao";

// imagens
import logo from "./img/logo.svg"

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 1em;

    ul {
        display: flex;
        gap: 2em;
        list-style: none;
        text-decoration: none;
    }
`

function Cabecalho() {
    return (
        <HeaderEstilizado>
            <img src={logo} alt="logo"/>
            <ul>
                <li>
                    <Opcao to='/comoFazer'> 
                        Como fazer
                    </Opcao>
                </li>
                <li>
                    <Opcao to='/ofertas'> 
                        Ofertas
                    </Opcao>
                </li>
                <li>
                    <Opcao to='/depoimentos'> 
                        Depoimentos
                    </Opcao>
                </li>
                <li>
                    <Opcao to='/videos'> 
                        Vídeos
                    </Opcao>
                </li>
                <li>
                    <Opcao to='/meuCarrinho'> 
                        Meu carrinho
                    </Opcao>
                </li>
            </ul>
        </HeaderEstilizado>
    )
}

export default Cabecalho;