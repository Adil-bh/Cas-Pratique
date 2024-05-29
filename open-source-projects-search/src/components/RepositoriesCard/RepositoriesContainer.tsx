import { useState } from "react";
import styled from "styled-components";
import Card from "../ui/Card";
import { repositoriesConfig } from "./utils/repositoriesConfig";

export default function RepositoriesContainer() {
    const repositories = repositoriesConfig;
    // vider le state car on doit commencer avec tout les repo
    // rajouter le setFilter
    const [filter] = useState("php");

    // Filtrer la fakeData en fonction du tag déclarer à php
    // onClick={setFilter(filteredRepositories)}
    const filteredRepositories = repositories.filter(repo => repo.tags.includes("php"));

    return (
        <div>
            <RepositoriesContainerStyled className="card-container">
                {filter === "" ? (
                    repositories.map((repo, index) => (
                        <Card key={index} {...repo} />
                    ))
                ) : (
                    filteredRepositories.map((repo, index) => (
                        <Card key={index} {...repo} />
                    ))
                )}
            </RepositoriesContainerStyled>
        </div>
    );
}

const RepositoriesContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
`;
