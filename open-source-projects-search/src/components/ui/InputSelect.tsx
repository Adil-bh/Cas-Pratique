import Select from 'react-select'

export const InputSelect = ({ name, id, optionValues }) => {
    return (
        <div>
            <Select options={optionValues} />
        </div>
    )
}