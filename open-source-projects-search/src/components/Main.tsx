import styled from "styled-components";
import { SearchForm } from "./SearchForm/SearchForm";
import RepositoriesContainer from "./RepositoriesCard/RepositoriesContainer";

export const Main = () => {


    return (
        <MainStyled>
            Main
            <SearchForm />
            <RepositoriesContainer />
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
