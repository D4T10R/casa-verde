import { styled } from "styled-components";

const OpcaoMinhaPlantaEstilizada = styled.li`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1em;

    .bolinha {
        width: 52px;
        height: 52px;
        border-radius: 300px;
        background: var(--cor-amarela);
    }

    p {
        font-family: var(--font-titulos);
        font-size: 22px;
        line-height: 27px;
    }

`

function OpcaoMinhaPlanta({ children }) {
    return (
        <OpcaoMinhaPlantaEstilizada>
            <div className="bolinha">
            </div>
            <p>{children}</p>
        </OpcaoMinhaPlantaEstilizada>
    )
}

export default OpcaoMinhaPlanta;