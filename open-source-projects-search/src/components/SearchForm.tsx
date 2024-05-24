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
                    label="technology-languages"
                    optionValues={technoOptions}
                />
                <InputSelect
                    label="tags"
                    optionValues={tagsOptions}
                />
                <InputSelect
                    label="spoken-languages"
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
`;