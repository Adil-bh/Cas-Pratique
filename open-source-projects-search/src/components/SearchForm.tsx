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
        <form action="">
            <div>
                <InputSelect
                    name="technology-languages"
                    id="technology-languages"
                    optionValues={technoOptions}
                />
                <InputSelect
                    name="tags"
                    id="tags"
                    optionValues={tagsOptions}
                />
                <InputSelect
                    name="spoken-languages"
                    id="spoken-languages"
                    optionValues={spokenOptions}
                />
            </div>
            <div>
                <button>Search</button>
            </div>
        </form>
    )
}