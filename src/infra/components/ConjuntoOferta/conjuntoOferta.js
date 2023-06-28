
// imagens
import { styled } from 'styled-components';
import seta from './img/seta.svg'

const ConjuntoOfertaEstilizado = styled.div`
    display: flex;
    align-items: center;
    width: 380px;
    height: 200px;
    text-align: left;
    background: rgba(245, 245, 245, 1);
    box-shadow: 3px 3px 10px  black;


    .fotoPlanta {
        width: 50%;
    }

    div {
        position: relative;
        left: -20px;
    }

    h3 {
        font-family: var(--font-textos);
        font-weight: var(--peso-titulos);
        font-size: 32px;
        line-height: 37px;
        color: var(--cor-textos);
    }

    p {
        font-family: var(--font-titulos);
        color: var(--cor-textos);
    }

    .preco {
        margin: 0.5em 0 1.5em 0;
    }

    .compra {
        color: var(--cor-amarela);
    }
`

function ConjuntoOferta({caminhoImagen, titulo, preco}) {
    return (
        <ConjuntoOfertaEstilizado>
            <img src={caminhoImagen} alt="" className='fotoPlanta'></img>
            <div>
                <h3>{titulo}</h3>
                <p className='preco'>R$ {preco}</p>
                <p className='compra'>Comprar <img src={seta} alt=""></img></p>
            </div>
        </ConjuntoOfertaEstilizado>
    )
}

export default ConjuntoOferta;