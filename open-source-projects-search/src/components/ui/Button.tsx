import styled from "styled-components"
type ButtonProps = {
    label: string,
    onClick: () => void
}
export const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <ButtonStyled onClick={onClick}>{label}</ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    min-width: 250px;
    height: 60px;
    background: #000;
    border: solid 1px #000;
    border-radius: 5px;
    color: #FFF;
    font-family: 'Josefin Sans';
    font-size: 20px;
    font-weight: 600;

    &:hover {
        background: #FFF;
        color: #000;
        cursor: pointer;
    }

    &:active {
        border-width: 2px
    }
`