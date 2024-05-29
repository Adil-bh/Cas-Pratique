import styled from "styled-components";
import { SearchForm } from "./SearchForm/SearchForm";
import { Title } from "./ui/Title";
import RepositoriesContainer from "./RepositoriesCard/RepositoriesContainer";

export const Main = () => {

    return (
        <MainStyled>
            <Title />
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