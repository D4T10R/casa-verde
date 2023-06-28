
// imagens
import { styled } from 'styled-components';
import plantas from './img/imagem-hero 1.svg'
import CampoInput from '../../components/CampoInput/campoInput';
import BotaoEnvio from '../../components/BotaoEnvio/botaoEnvio';

const AssinaturaEstilizada = styled.section`
    display: flex;
    justify-content: space-around;

    div {
        display: flex;
        flex-direction: column;
        margin-top: 4em;
        margin-right: 40%;
        width: 20%;
        gap: 1em;

        p {
            font-family: var(--font-titulos);
            color: var(--cor-textos);
        }

        .suaCasa {
            font-size: 22px;
        }
    }

    h1 {
        font-family: var(--font-titulos);
        font-weight: var(--peso-titulos);
        color: var(--cor-titulos);
        font-size: 82px;
        line-height: 94px;
    }
    img {
        position: absolute;
        margin-top: -2em;
        width: 25%;
    }
`

function AssinaturaNewsletter() {
    return (
        <AssinaturaEstilizada>
            <div>
                <p className='suaCasa'>Sua casa com as </p>
                <h1>melhores plantas</h1>
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <form >
                    <CampoInput tipo='email'/>
                    <BotaoEnvio />
                </form>        
            </div>
            <img src={plantas} alt='Imagem de uma planta'/>
        </AssinaturaEstilizada>
    )
}

export default AssinaturaNewsletter;