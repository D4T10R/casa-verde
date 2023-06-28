import { styled } from 'styled-components';
import AssinaturaNewsletter from '../../infra/patterns/Assinatura/index.js';
import Cabecalho from '../../infra/patterns/Cabecalho/index.js'

// imagens 
import mancha from './img/mancha-fundo.svg'
import MinhaPlanta from '../../infra/patterns/MinhaPlanta/index.js';
import Ofertas from '../../infra/patterns/Ofertas/index.js';

const MainEstilizado = styled.main`
    background-image: url(${mancha});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 600px;
`

function PaginaInicial() {
    return (
        <MainEstilizado>
            <Cabecalho />
            <AssinaturaNewsletter />
            <MinhaPlanta />
            <Ofertas />
        </MainEstilizado>
    )
}

export default PaginaInicial;