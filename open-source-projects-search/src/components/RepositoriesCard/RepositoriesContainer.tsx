import styled from "styled-components";
import Card from "../ui/Card";
import { repositoriesConfig } from "./utils/repositoriesConfig";

export default function RepositoriesContainer() {
    const repositories = repositoriesConfig

    return (
        <RepositoriesContainerStyled className="card-container">
            {repositories.map((repo, index) => (
                <Card key={index} {...repo} />
            ))}
        </RepositoriesContainerStyled>
    )
}

const RepositoriesContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
`;