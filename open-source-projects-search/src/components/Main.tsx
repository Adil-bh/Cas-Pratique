import styled from "styled-components";
import { SearchForm } from "./SearchForm";

export const Main = () => {
    return (
        <MainStyled>
            Main
            <SearchForm />
        </MainStyled>
    )
}

const MainStyled = styled.main`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;