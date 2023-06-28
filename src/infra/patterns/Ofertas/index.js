import { styled } from "styled-components";
import ConjuntoOferta from "../../components/ConjuntoOferta/conjuntoOferta";

// imagens
import imgProduto1 from "./img/produto-01 1.svg"
import imgProduto2 from "./img/produto-02 1.svg"
import imgProduto3 from "./img/produto-03 1.svg"
import imgProduto4 from "./img/produto-04 1.svg"
import imgProduto5 from "./img/produto-05 1.svg"
import imgProduto6 from "./img/produto-06 1.svg"
 
const OfertasEstilizadas = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 3em 0 5em 0;

    .frase_introduzir_titulo {
        margin-bottom: 0.5em;
        font-family: var(--font-titulos);
        font-size: 22px;
        line-height: 27px;
        color: var(--cor-textos);
    }

    h2 {
        margin-bottom: 0.3em;
        font-family: var(--font-textos);
        font-weight: var(--peso-titulos);
        font-size: 82px;
        line-height: 94px;
    }

    ul {
        display: flex;
        justify-content: center;
        width: 1200px;
        flex-wrap: wrap;
        gap: 1em;
        list-style: none;
    }
`

function Ofertas() {
    return (
        <OfertasEstilizadas>
            <p className="frase_introduzir_titulo">Conhaça nossas</p>
            <h2>ofertas</h2>
            <ul>
                <li>
                    <ConjuntoOferta 
                        caminhoImagen={imgProduto1}
                        titulo="Ajuga reptans"
                        preco="20,00"
                    />
                </li>
                <li>
                    <ConjuntoOferta 
                        caminhoImagen={imgProduto2}
                        titulo="Cordevline"
                        preco="20,00"
                    />
                </li>
                <li>
                    <ConjuntoOferta 
                        caminhoImagen={imgProduto3}
                        titulo="Crassula ovato"
                        preco="20,00"
                    />
                </li>
                <li>
                    <ConjuntoOferta 
                        caminhoImagen={imgProduto4}
                        titulo="Cyperus rotundus"
                        preco="20,00"
                    />
                </li>
                <li>
                    <ConjuntoOferta 
                        caminhoImagen={imgProduto5}
                        titulo="Delairea odorate"
                        preco="20,00"
                    />
                </li>
                <li>
                    <ConjuntoOferta 
                        caminhoImagen={imgProduto6}
                        titulo="Datura metel"
                        preco="20,00"
                    />
                </li>
            </ul>
        </OfertasEstilizadas>
    )
}

export default Ofertas;