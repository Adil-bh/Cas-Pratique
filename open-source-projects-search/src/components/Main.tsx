import styled from "styled-components";

export const Main = () => {
    return (
        <MainStyled>
            Main
        </MainStyled>
    )
}

const MainStyled = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  
`;