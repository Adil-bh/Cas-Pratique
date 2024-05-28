import styled from "styled-components";
import { SearchForm } from "./SearchForm/SearchForm";
import Card from "./Card/Card";

export const Main = () => {
    return (
        <MainStyled>
            Main
            <SearchForm />
            <Card/>
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