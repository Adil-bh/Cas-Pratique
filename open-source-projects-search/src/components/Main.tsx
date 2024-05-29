import styled from "styled-components";
import { SearchForm } from "./SearchForm/SearchForm";
import { Title } from "./ui/Title";

export const Main = () => {
    return (
        <MainStyled>
            Main
            <Title />
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