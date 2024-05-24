import { toCapitalize } from "../../utils/strings"

export const InputSelect = ({ name, id, optionValues }) => {
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