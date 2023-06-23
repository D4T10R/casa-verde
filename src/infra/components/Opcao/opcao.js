import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LinkEstilizado = styled(Link)`
    font-family: var(--font-texto);
    text-decoration: none;
    line-height: 19.5px;
    color: var(--cor-titulos);
`

function MenuLink({ to, children }) {
    return (
        <LinkEstilizado to={to}>   
            {children}
        </LinkEstilizado>
    )
}

export default MenuLink;