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
                <div>
                    <select name="tags" id="tags">
                        <option value="foot">foot</option>
                        <option value="moto">moto</option>
                        <option value="histoire">histoire</option>
                    </select>
                </div>
                <div>
                    <select name="spoken-languages" id="spoken-languages">
                        <option value="français">Français</option>
                        <option value="spanish">Spanish</option>
                        <option value="english">English</option>
                    </select>
                </div>
            </div>
            <div>
                <button>Search</button>
            </div>
        </form>
    )
}