export const InputSelect = ({ name, id, optionValues }) => {
    const toCapitalize = (string) => {
        let newString = string
        newString[0].toUpperCase()

        return newString
    }
    return (
        <div>
            <select name={name} id={id}>
                {optionValues.map(optionValue => (
                    <option value={optionValue}>{toCapitalize(optionValue)}</option>
                ))}
            </select>
        </div>
    )
}