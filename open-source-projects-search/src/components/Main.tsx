import styled from "styled-components";
import { SearchForm } from "./SearchForm/SearchForm";
import Card from "./ui/Card";
import { repositoriesConfig } from "./Card/utils/repositoriesConfig";

export const Main = () => {

    const repositories = repositoriesConfig

    return (
        <MainStyled>
            Main
            <SearchForm />
            <div className="card-container">
                {repositories.map((repo, index) => (
                    <Card key={index} {...repo} />
                ))}
            </div>
        </MainStyled>
    )
}

const MainStyled = styled.main`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`;
