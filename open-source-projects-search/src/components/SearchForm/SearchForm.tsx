import styled from "styled-components"
import { InputSelect } from "../ui/InputSelect"
import { Button } from "../ui/Button"
import { selectsConfig } from "./utils/selectsConfig"



export const SearchForm = () => {
    const handleSubmit = () => {
        console.log("Done")
    }

    const selects = selectsConfig

    /**Affichage */
    return (
        <SearchFormStyled>
            <div className="inputs-container">
                {selects.map(select => (
                    <InputSelect
                        label={select.label}
                        optionValues={select.options}
                        placeholder={select.placeholder}
                        isMulti={select.label === "Tags"}
                    />
                ))}
            </div>
            <div className="button-container">
                <Button label={"Search"} onClick={handleSubmit} />
            </div>
        </SearchFormStyled>
    )
}

const SearchFormStyled = styled.form`
    .inputs-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    .button-container {
        justify-content: center;
        display: flex;
        margin: 40px 0;
    }
`;