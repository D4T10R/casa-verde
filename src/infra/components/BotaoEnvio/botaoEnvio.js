import { styled } from "styled-components";

const InputEstilizado = styled.input`
    position: absolute;
    background: none;
    width: 8%;
    padding: 1.5em 1em;
    border: none;
    background: var(--cor-amarela);
    font-family: var(--font-titulos);
    color: white;

`

function BotaoEnvio() {
    return (
        <InputEstilizado type="submit" value='Assinar newsletter'/>
    )
}

export default BotaoEnvio;