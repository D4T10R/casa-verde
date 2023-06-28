import { styled } from "styled-components";

// imagens 
import imgMinhaPlanta from "./img/img-minhaPlanta.svg"
import OpcaoMinhaPlanta from "../../components/OpcaoMinhaPlanta/OpcaoMinhaPlanta";

const MinhaPlantaEstilizada = styled.section`
    display: flex;
    position: relative;
    justify-content: center;
    left: -5%;
    margin-top: 4em;
    gap: 2em;

    .conjunto_minha_planta {
        display: flex;
        justify-content: space-between;
        background: rgba(245, 245, 245, 1);
        box-shadow: 3px 3px 6px  black;
        width: 55%;
    }

    .conjunto_minha_planta-img {
        width: 40%;
    }

    .conjunto_minha_planta-textos {
        padding: 3em 4em 0 0;

        p {
            font-family: var(--font-titulos);
            color: var(--cor-textos);
        }

        .comoConseguir {
            font-size: 22px;
        }

        h2 {
            font-family: var(--font-titulos);
            font-weight: var(--peso-titulos);
            color: var(--cor-titulos);
            font-size: 42px;
            line-height: 49px;
            margin: 0.5em 0 1em 0;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 2em;
        }
    }
`

function MinhaPlanta() {
    return (
        <MinhaPlantaEstilizada>
            <div className="conjunto_minha_planta">
                <div className="conjunto_minha_planta-img">
                    <img src={imgMinhaPlanta} alt="Imagem de planta"/>
                </div>
                <div className="conjunto_minha_planta-textos">
                    <p className='comoConseguir'>Como conseguir</p>
                    <h2>melhores plantas</h2>
                    <ul>
                        <OpcaoMinhaPlanta>
                            Escolha suas plantas
                        </OpcaoMinhaPlanta>
                        <OpcaoMinhaPlanta>
                            Faça seu pedido
                        </OpcaoMinhaPlanta>
                        <OpcaoMinhaPlanta>
                            Aguarde na sua casa
                        </OpcaoMinhaPlanta>
                    </ul>
                </div>

            </div>
        </MinhaPlantaEstilizada>
    )
}

export default MinhaPlanta;