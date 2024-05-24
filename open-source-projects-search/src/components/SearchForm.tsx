import { InputSelect } from "./ui/InputSelect"

export const SearchForm = () => {
    const technoOptions = ["javascript", "php", "python"]
    const tagsOptions = ["foot", "moto", "histoire"]
    const spokenOptions = ["français", "spanish", "english"]
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