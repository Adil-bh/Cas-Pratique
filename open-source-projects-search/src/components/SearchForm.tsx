import styled from "styled-components"
import { InputSelect } from "./ui/InputSelect"

export const SearchForm = () => {
    const technoOptions = [
        { value: "javascript", label: "Javascript" },
        { value: "php", label: "PHP" },
        { value: "python", label: "Python" }
    ]
    const tagsOptions = [
        { value: "foot", label: "foot" },
        { value: "moto", label: "moto" },
        { value: "histoire", label: "histoire" }
    ]
    const spokenOptions = [
        { value: "français", label: "français" },
        { value: "spanish", label: "spanish" },
        { value: "english", label: "english" }
    ]

    return (
        <SearchFormStyled action="">
            <div className="inputs-container">
                <InputSelect
                    label="Technology Languages"
                    optionValues={technoOptions}
                />
                <InputSelect
                    label="Tags"
                    optionValues={tagsOptions}
                />
                <InputSelect
                    label="Spoken Languages"
                    optionValues={spokenOptions}
                />
            </div>
            <div>
                <button>Search</button>
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
`;