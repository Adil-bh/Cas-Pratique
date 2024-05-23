export const SearchForm = () => {
    return (
        <form action="">
            <div>
                <div>
                    <select name="technology-languages" id="technology-languages">
                        <option value="javascript">Javascript</option>
                        <option value="php">PHP</option>
                        <option value="python">Python</option>
                    </select>
                </div>
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