import { styled } from "styled-components";

// imagens
import iconeEmail from './img/mail.svg'
import { useState } from "react";

const InputEstilizado = styled.input`
    width: 70%;
    padding: 1.5em 1em;
    border: none;
    background: url(${props => props.iconeAtual}) #fff no-repeat;
    background-position: left center;
    font-family: var(--font-titulos);
`

function CampoInput(props) {

    const [icone, setIcone] = useState(iconeEmail) // Recebe como padrão o IconeEmail

    function TrocaFundo(event) {
        console.log(event.target)
        setIcone(null);
    }

    return (
        <InputEstilizado id='test' iconeAtual={icone} type={props.tipo} placeholder="      Insira o seu email" onChange={TrocaFundo}/>  
    )
}

export default CampoInput;