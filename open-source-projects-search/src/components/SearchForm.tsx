import styled from "styled-components"
import { InputSelect } from "./ui/InputSelect"
import { Button } from "./ui/Button"

export const SearchForm = () => {
    const handleSubmit = () => {
        console.log("Done")
    }

    const technoConfig = {
        label: "Technology Languages",
        placeholder: "Javascript",
        options: [
            { value: "javascript", label: "Javascript" },
            { value: "php", label: "PHP" },
            { value: "python", label: "Python" }
        ]
    }

    const tagsConfig = {
        label: "Tags",
        placeholder: "Video games, Saas, ...",
        options: [
            { value: "foot", label: "foot" },
            { value: "moto", label: "moto" },
            { value: "histoire", label: "histoire" }
        ]
    }
    const spokenConfig = {
        label: "Spoken Languages",
        placeholder: "Français, Español, ...",
        options: [
            { value: "français", label: "français" },
            { value: "spanish", label: "spanish" },
            { value: "english", label: "english" }
        ]
    }

    /**Affichage */
    return (
        <SearchFormStyled>
            <div className="inputs-container">
                <InputSelect
                    label={technoConfig.label}
                    optionValues={technoConfig.options}
                    placeholder={technoConfig.placeholder}
                />
                <InputSelect
                    label={tagsConfig.label}
                    optionValues={tagsConfig.options}
                    placeholder={tagsConfig.placeholder}
                />
                <InputSelect
                    label={spokenConfig.label}
                    optionValues={spokenConfig.options}
                    placeholder={spokenConfig.placeholder}
                />
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
        align-items: center;
        gap: 15px;
    }

    .button-container {
        justify-content: center;
        display: flex;
        margin: 40px 0;
    }
`;